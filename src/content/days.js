const publicAsset = (path) => `${process.env.PUBLIC_URL}${path}`;

export const days = [
  {
    day: 1,
    date: '2026-05-01',
    type: 'letter',
    title: 'The First Page',
    message:
      'Welcome to your birthday countdown. For the next 17 days, this little scrapbook is going to keep opening new pages made for you.',
    prompt:
      'Tonight has a destination. Solve the riddle to reveal where we are headed.',
    riddle: {
      question:
        'A little fire lights the way, by the water where boardwalk lights play. Queso waits, tortillas fold, and dinner comes wrapped in gold. Where are we going tonight?',
      clues: [
        'Clue 1: The view may sparkle before the food does.',
        'Clue 2: The name sounds like someone brought a match to dinner.',
      ],
      answers: ['torchys', "torchy's", 'torchys tacos', "torchy's tacos"],
      successTitle: 'You got it.',
      successMessage: "Tonight's destination is Torchy's Tacos at The Boardwalk at Towne Lake.",
      revealUrl: 'https://maps.app.goo.gl/SrjLy7CkiReyJ1NC7',
      revealLabel: 'Open the map',
    },
    image: publicAsset('/assets/20260314_0152_print.jpg'),
    imageAlt: 'A scrapbook photo for Jessica',
    imageCaption: 'The first photo in the birthday-month album.',
    storyChapter: 1,
    hasPlan: true,
  },
  {
    day: 2,
    date: '2026-05-02',
    type: 'memory',
    title: 'Your Invitation',
    message:
      'Today is simple on purpose: food, family, fresh air, and a little time together.',
    prompt: 'Solve the invitation riddle to reveal today’s family plan.',
    image: publicAsset('/assets/IMG_E3194.JPG'),
    imageAlt: 'Jessica and family picnic memory',
    imageCaption: 'Today’s invitation belongs in the family album.',
    riddle: {
      question:
        'No walls, no waiter, no rush to be seen, just something to eat and a patch of green. The best part is packed, but not in the basket. Look around at your people, and you’ll have it. What are we doing today?',
      clues: [
        'Clue 1: The table might be a blanket.',
        'Clue 2: The best part is not packed in the basket.',
      ],
      answers: ['picnic', 'a picnic', 'family picnic', 'park picnic'],
      successTitle: 'You’re invited.',
      successMessage: 'Today’s plan is a family picnic.',
      revealUrl: 'https://maps.app.goo.gl/dxfCKnyd1jk1CQBs7',
      revealLabel: 'Open the map',
      ticket: {
        eyebrow: 'Birthday Month Invitation',
        title: 'Family Picnic Pass',
        admit: 'Jessica + family',
        date: 'May 2, 2026',
        time: 'Today',
        location: 'Richard & Meg Weekley Park',
        address: '8440 Greenhouse Road, Cypress, TX 77433',
        note: 'Food, fresh air, a lake view, and time together.',
        image: publicAsset('/assets/PXL_20250729_200727727.jpeg'),
        imageAlt: 'Family picnic invitation photo',
      },
    },
    storyChapter: 2,
    hasPlan: true,
  },
  {
    day: 3,
    date: '2026-05-03',
    type: 'mission',
    title: 'The Comfort Prescription',
    message:
      'No big event today. Just a little care plan from the birthday-month department.',
    prompt:
      'Today’s official prescription: one small treat, one deep breath, and absolutely no guilt.',
    choiceReveal: {
      title: 'Choose your prescription for tonight',
      options: [
        {
          label: 'Sweet',
          result:
            'Approved: one sweet treat, chosen by you, with no practical justification required.',
        },
        {
          label: 'Salty',
          result:
            'Approved: one salty snack run and full permission to call it part of the care plan.',
        },
        {
          label: 'Cozy',
          result:
            'Approved: soft clothes, low lights, and one episode, movie, or quiet moment that asks nothing from you.',
        },
        {
          label: 'Surprise Me',
          result:
            'Approved: husband chooses one small comfort and delivers it with birthday-month seriousness.',
        },
      ],
      footer: 'Prescription may be refilled as needed.',
    },
    image: publicAsset('/assets/PXL_20250729_200727727.jpeg'),
    imageAlt: 'A photo for Jessica',
    imageCaption: 'A little comfort, well earned.',
    storyChapter: 3,
  },
  {
    day: 4,
    date: '2026-05-04',
    type: 'letter',
    title: 'A Monday Kind of Love',
    message:
      'No big plans today. Just work, and the quiet kind of love that shows up in the ordinary days. You go shape minds and I will be here when you get back.',
    prompt: 'A birthday-month dad joke, delivered with full sincerity:',
    jokes: [
      {
        setup: 'Why was the teacher wearing sunglasses to class?',
        punchline: 'Because her students were so bright.',
      },
      {
        setup: 'Why did the student eat his homework?',
        punchline: 'Because the teacher told him it was a piece of cake.',
      },
      {
        setup: 'Why did the teacher go to the beach?',
        punchline: 'To test the water!',
      },
      {
        setup: 'Why did the math teacher look so sad?',
        punchline: 'Because she had too many problems.',
        footer: 'You are welcome. Go be great today.',
      },
    ],
    image: publicAsset('/assets/8731616957018501250.JPG'),
    imageAlt: 'A photo for Jessica',
    imageCaption: 'A Monday worth remembering.',
    storyChapter: 4,
  },
  {
    day: 5,
    date: '2026-05-05',
    type: 'memory',
    title: 'Someone Has Something to Say',
    message:
      'This page was not made by your husband. Someone else had something to say about you, and he said it loud.',
    riddle: {
      question:
        'He came last, but he has never been an afterthought. The youngest one, the one who keeps everyone on their toes, the one who somehow always has a move nobody saw coming. He loves loud even when he does not say much. He put this page together because his mom deserves to be celebrated by the people who love her most. Who made this?',
      clues: [
        'Clue 1: He shares your last name.',
        'Clue 2: He is the baby of the family \u2014 and he owns it.',
      ],
      answers: ['james', 'myson', 'my son', 'myboy', 'my boy', 'mykid', 'my kid', 'son', 'james thibodeaux', 'jamesthibodeaux'],
      successTitle: 'That\u2019s my boy.',
      successMessage: 'James put this together. Every photo, every memory, and tonight \u2014 all him.',
      jamesGallery: true,
      kicker: 'Figure out who made this page',
    },
    storyNote: 'No new chapter today \u2014 James took over the whole page. Honestly, fair.',
    storyChapter: 5,
    hasPlan: true,
  },
  {
    day: 6,
    date: '2026-05-06',
    type: 'letter',
    title: 'Six',
    message:
      'Hold this number for one more page. It is part of the setup.',
    prompt:
      'Six is only half the joke.',
    storyChapter: 6,
  },
  {
    day: 7,
    date: '2026-05-07',
    type: 'mission',
    title: 'Six Seven',
    message:
      'Some numbers are just numbers. Some numbers become a whole family bit. This page is both.',
    prompt:
      'First uncover the photo. Then build the crown.',
    tileReveal: {
      title: 'Tap the tiles',
      image: publicAsset('/assets/67/67.jpeg'),
      imageAlt: 'Jessica doing the six seven gesture',
      caption: 'The official 6-7 evidence.',
      joke:
        'Why did 6 and 7 show up together? Because even the calendar knew you deserved a little extra today.',
    },
    crownReveal: {
      title: 'Build the crown',
      prompt: 'Tap every point to light it up.',
      revealTitle: 'Queen status confirmed.',
      reveal:
        'Not because it is birthday month. Not because a crown says so. Because you carry the room, keep the family moving, love hard, laugh loud, and somehow make ordinary days feel chosen.',
    },
    storyChapter: 7,
    hasPlan: true,
    skipStoryCallout: true,
  },
  {
    day: 8,
    date: '2026-05-08',
    type: 'mission',
    title: 'Double Date Night',
    message:
      'Friday was for getting out, laughing, eating something good, and having an actual grown-up night with Amanda and Ray. Birthday month needed a night that felt easy, social, and fun.',
    prompt:
      'Official recap: good company, no kid logistics for a minute, and one more birthday-month memory added to the list.',
    storyChapter: 8,
    hasPlan: true,
    skipStoryCallout: true,
  },
  {
    day: 9,
    date: '2026-05-09',
    type: 'clue',
    title: 'A Soft Saturday',
    message:
      'After a good Friday night, today gets to be quieter. No big production, just a little space to enjoy the weekend and let birthday month keep unfolding.',
    prompt:
      'Clue: not every surprise has to be loud. Some of them are better when they sneak up on you.',
    storyChapter: 9,
    skipStoryCallout: true,
  },
  {
    day: 10,
    date: '2026-05-10',
    type: 'letter',
    title: "Mother's Day",
    message:
      'Today is Mother\'s Day, so this page belongs to the part of you that gives, remembers, carries, teaches, plans, protects, laughs, corrects, comforts, and somehow still keeps loving everybody through it.',
    prompt:
      'No riddle today. Just this: the way you love this family is one of the best things about you.',
    storyChapter: 10,
    hasPlan: true,
    skipStoryCallout: true,
  },
  {
    day: 11,
    date: '2026-05-11',
    type: 'gift',
    title: 'A Little Something',
    message:
      'A gift reveal goes here. It can stay vague now and become specific when the final idea is ready.',
    prompt: 'Today includes something small, wrapped, or chosen just for you.',
    storyChapter: 11,
  },
  {
    day: 12,
    date: '2026-05-12',
    type: 'gift',
    title: 'Something Is Waiting',
    message:
      'Today has a surprise tucked inside it. No over-explaining, no hints that ruin it. Just know that something has been planned with you in mind.',
    prompt: 'Open this one when the day gets there.',
    storyChapter: 12,
    hasPlan: true,
    skipStoryCallout: true,
  },
  {
    day: 13,
    date: '2026-05-13',
    type: 'mission',
    title: 'Birthday Week Warmup',
    message:
      'Birthday week is close, so today gets a small mission that points the day in a fun direction.',
    prompt: 'Pick the song that should start the birthday weekend playlist.',
    storyChapter: 13,
  },
  {
    day: 14,
    date: '2026-05-14',
    type: 'clue',
    title: 'Almost There',
    message:
      'The countdown is getting serious. This clue is allowed to be suspicious.',
    prompt: 'Clue: leave room in the day.',
    storyChapter: 14,
  },
  {
    day: 15,
    date: '2026-05-15',
    type: 'letter',
    title: 'Birthday Weekend Eve',
    message:
      'This is the part where birthday month starts leaning into the finale. Tonight has something planned, and the only job is to let yourself enjoy it.',
    prompt: 'Leave room in the day. That is the clue.',
    storyChapter: 15,
    hasPlan: true,
    skipStoryCallout: true,
  },
  {
    day: 16,
    date: '2026-05-16',
    type: 'mission',
    title: 'One More Sleep',
    message:
      'Tomorrow is the big day. Tonight should feel like the warmup, the preview, and the soft launch.',
    prompt: 'Get ready for tomorrow. Details arrive exactly when they should.',
    storyChapter: 16,
  },
  {
    day: 17,
    date: '2026-05-17',
    type: 'gift',
    title: 'Birthday Queen Day',
    message:
      'Today is the finale. This page is reserved for the real birthday plan, the biggest note, and whatever surprise deserves the crown.',
    prompt: 'Happy birthday, Jessica.',
    storyChapter: 17,
    isFinale: true,
    hasPlan: true,
  },
];
