import { useState, useSyncExternalStore } from 'react';
import './App.css';
import { days } from './content/days';
import { storyChapters } from './content/story';

const TIME_ZONE = 'America/Chicago';
const todayOverride = new URLSearchParams(window.location.search).get('today');

function chicagoDateKey(date = new Date()) {
  if (todayOverride) {
    return todayOverride;
  }

  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const byType = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${byType.year}-${byType.month}-${byType.day}`;
}

function dayStatus(day, todayKey) {
  if (day.date > todayKey) {
    return 'locked';
  }
  if (day.date === todayKey) {
    return 'today';
  }
  return 'open';
}

function getHashRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  return hash || '';
}

function subscribeToHashChange(callback) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}

function useHashRoute() {
  return useSyncExternalStore(subscribeToHashChange, getHashRoute, () => '');
}

function App() {
  const route = useHashRoute();
  const todayKey = chicagoDateKey();
  const currentDay =
    days.find((day) => day.date === todayKey) ||
    [...days].reverse().find((day) => day.date < todayKey) ||
    days[0];

  const [section, id] = route.split('/');
  const selectedDay = section === 'day' ? days.find((day) => day.day === Number(id)) : null;
  const selectedChapter =
    section === 'story' && id ? storyChapters.find((chapter) => chapter.chapter === Number(id)) : null;

  return (
    <main className="app-shell">
      <SiteHeader />
      {selectedDay ? (
        <DayView day={selectedDay} todayKey={todayKey} />
      ) : selectedChapter ? (
        <ChapterView chapter={selectedChapter} todayKey={todayKey} />
      ) : section === 'story' ? (
        <StoryIndex todayKey={todayKey} />
      ) : section === 'memories' ? (
        <Memories todayKey={todayKey} />
      ) : (
        <Home todayKey={todayKey} currentDay={currentDay} />
      )}
      <BottomNav />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#/">
        <img
          className="brand-mark"
          src={`${process.env.PUBLIC_URL}/assets/avy.jpeg`}
          alt="Jessica"
        />
        <span>
          <span className="eyebrow">May 1-17, 2026</span>
          <strong>Celebrating Jessica</strong>
        </span>
      </a>
    </header>
  );
}

function Home({ todayKey, currentDay }) {
  const availableCount = days.filter((day) => day.date <= todayKey).length;
  const todayStatus = dayStatus(currentDay, todayKey);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">Birthday month scrapbook</p>
          <h1>17 days made just for you.</h1>
          <p>
            A little path of notes, memories, clues, missions, and chapters from
            <em> Bae&apos;s Anatomy</em> leading to Birthday Queen Day.
          </p>
        </div>
        <div className="today-panel">
          <span className="stamp">Day {currentDay.day} of 17</span>
          <h2>{todayStatus === 'locked' ? 'The scrapbook opens May 1.' : "Today's page is ready."}</h2>
          <a className="primary-action" href={`#/day/${currentDay.day}`}>
            Open Today&apos;s Surprise
          </a>
        </div>
      </section>

      <section className="progress-strip" aria-label="Birthday progress">
        <span>{availableCount} of 17 unlocked</span>
        <div className="progress-track">
          <div style={{ width: `${(availableCount / 17) * 100}%` }} />
        </div>
      </section>

      <section className="path-section">
        <div className="section-heading">
          <p className="kicker">Scrapbook path</p>
          <h2>Open one page each day</h2>
        </div>
        <div className="scrapbook-path">
          {days.map((day) => (
            <DayCard key={day.day} day={day} status={dayStatus(day, todayKey)} />
          ))}
        </div>
      </section>
    </>
  );
}

function DayCard({ day, status }) {
  const locked = status === 'locked';
  return (
    <a
      className={`day-card ${status} ${day.isFinale ? 'finale' : ''} ${day.hasPlan ? 'planned' : ''}`}
      href={locked ? '#/' : `#/day/${day.day}`}
      aria-disabled={locked}
    >
      {day.hasPlan && <span className="plan-indicator" aria-label="Something special is planned" />}
      <span className="day-number">Day {day.day}</span>
      {locked ? (
        <span className="locked-label">{day.hasPlan ? 'Something is waiting' : 'Locked'}</span>
      ) : (
        <>
          {day.hasPlan && <span className="planned-label">Planned surprise</span>}
          <span className="day-type">{day.type}</span>
          <strong>{day.title}</strong>
          <span className="day-date">{formatDate(day.date)}</span>
        </>
      )}
    </a>
  );
}

function DayView({ day, todayKey }) {
  const status = dayStatus(day, todayKey);
  const locked = status === 'locked';
  const chapter = storyChapters.find((story) => story.chapter === day.storyChapter);

  return (
    <section className="detail-page">
      <a className="back-link" href="#/">
        Back to path
      </a>
      {locked ? (
        <LockedPanel label={`Day ${day.day}`} date={day.date} />
      ) : (
        <>
          <article className={`reveal-card reveal-${day.type} ${day.isFinale ? 'finale' : ''}`}>
            <div className="paper-corner" />
            <p className="kicker">{day.isFinale ? 'Birthday Queen Day' : `Day ${day.day}`}</p>
            <h1>{day.title}</h1>
            <p className="date-line">{formatDate(day.date)}</p>
            {day.image && (
              <figure className="photo-frame">
                <img src={day.image} alt={day.imageAlt || ''} />
                {day.imageCaption && <figcaption>{day.imageCaption}</figcaption>}
              </figure>
            )}
            <p className="message">{day.message}</p>
            {day.prompt && <div className="mission-box">{day.prompt}</div>}
            {day.riddle && <RiddleReveal riddle={day.riddle} />}
          </article>

          <article className="story-callout">
            <p className="kicker">Bae&apos;s Anatomy</p>
            <h2>{chapter?.title || `Chapter ${day.storyChapter}`}</h2>
            <p>A new chapter unlocked with today&apos;s page.</p>
            <a className="secondary-action" href={`#/story/${day.storyChapter}`}>
              Read Chapter {day.storyChapter}
            </a>
          </article>
        </>
      )}
    </section>
  );
}

function RiddleReveal({ riddle }) {
  const [guess, setGuess] = useState('');
  const [showClues, setShowClues] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const normalizedGuess = normalizeGuess(guess);
  const acceptedAnswers = riddle.answers.map(normalizeGuess);
  const solved = acceptedAnswers.includes(normalizedGuess);
  const showMiss = attempted && guess.trim() && !solved;

  function checkGuess(event) {
    event.preventDefault();
    setAttempted(true);
  }

  return (
    <div className="riddle-card">
      <p className="kicker">Tonight&apos;s riddle</p>
      <p className="riddle-question">{riddle.question}</p>
      <form className="guess-form" onSubmit={checkGuess}>
        <label htmlFor="day-riddle-guess">Your guess</label>
        <input
          id="day-riddle-guess"
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
          placeholder="Type your answer..."
        />
        <button type="submit">Check</button>
      </form>
      {showMiss && <p className="guess-feedback">Not quite. Try again or take a clue.</p>}
      <button className="clue-button" type="button" onClick={() => setShowClues(!showClues)}>
        {showClues ? 'Hide clues' : 'Use a clue'}
      </button>
      {showClues && (
        <div className="clue-list">
          {riddle.clues.map((clue) => (
            <p key={clue}>{clue}</p>
          ))}
        </div>
      )}
      {solved && (
        <div className="answer-reveal">
          <h2>{riddle.successTitle}</h2>
          <p>{riddle.successMessage}</p>
          <a className="secondary-action" href={riddle.revealUrl} target="_blank" rel="noreferrer">
            {riddle.revealLabel}
          </a>
        </div>
      )}
    </div>
  );
}

function StoryIndex({ todayKey }) {
  const unlocked = storyChapters.filter((chapter) => chapter.date <= todayKey).length;
  return (
    <section className="detail-page">
      <div className="book-hero">
        <p className="kicker">A short story in 17 parts</p>
        <h1>Bae&apos;s Anatomy</h1>
        <p>{unlocked} of 17 chapters unlocked.</p>
      </div>
      <div className="chapter-list">
        {storyChapters.map((chapter) => {
          const locked = chapter.date > todayKey;
          return (
            <a
              className={`chapter-row ${locked ? 'locked' : ''}`}
              href={locked ? '#/story' : `#/story/${chapter.chapter}`}
              key={chapter.chapter}
            >
              <span>Chapter {chapter.chapter}</span>
              <strong>{locked ? `Chapter ${chapter.chapter}` : chapter.title}</strong>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function ChapterView({ chapter, todayKey }) {
  const locked = chapter.date > todayKey;
  return (
    <section className="detail-page">
      <a className="back-link" href="#/story">
        Back to book
      </a>
      {locked ? (
        <LockedPanel label={`Chapter ${chapter.chapter}`} date={chapter.date} />
      ) : (
        <article className="book-page">
          <p className="kicker">Bae&apos;s Anatomy</p>
          <h1>{chapter.title}</h1>
          <p className="date-line">Chapter {chapter.chapter}</p>
          {chapter.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      )}
    </section>
  );
}

function Memories({ todayKey }) {
  const unlockedMemories = days.filter((day) => day.date <= todayKey && day.image);
  return (
    <section className="detail-page">
      <div className="section-heading">
        <p className="kicker">Photo album</p>
        <h1>Unlocked memories</h1>
      </div>
      {unlockedMemories.length ? (
        <div className="memory-grid">
          {unlockedMemories.map((day) => (
            <figure className="memory-card" key={day.day}>
              <img src={day.image} alt={day.imageAlt || ''} />
              <figcaption>
                <span>Day {day.day}</span>
                <strong>{day.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="empty-state">Photos will show here after they unlock.</div>
      )}
    </section>
  );
}

function LockedPanel({ label, date }) {
  return (
    <article className="locked-panel">
      <span className="lock-icon" aria-hidden="true">
        LOCK
      </span>
      <h1>{label}</h1>
      <p>This page unlocks on {formatDate(date)}.</p>
    </article>
  );
}

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <a href="#/">Path</a>
      <a href="#/story">Book</a>
      <a href="#/memories">Photos</a>
    </nav>
  );
}

function normalizeGuess(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/^torchystacos$/, 'torchystacos');
}

function formatDate(dateKey) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${dateKey}T00:00:00Z`));
}

export default App;
