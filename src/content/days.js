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
    title: 'Your First Mission',
    message:
      'Small mission, big birthday-month energy. You get to choose the mood for tonight.',
    prompt: 'Choose one: cozy movie, dessert run, or music while we cook.',
    storyChapter: 3,
  },
  {
    day: 4,
    date: '2026-05-04',
    type: 'clue',
    title: 'A Tiny Clue',
    message:
      'Not every surprise reveals itself right away. This one is only the beginning of something coming later.',
    prompt: 'Clue: comfort matters.',
    storyChapter: 4,
  },
  {
    day: 5,
    date: '2026-05-05',
    type: 'gift',
    title: 'Little Gift Energy',
    message:
      'A small birthday-month perk is waiting today. The details can be swapped in when the plan is final.',
    prompt: 'Redeemable today: one no-questions-asked favorite snack run.',
    storyChapter: 5,
    hasPlan: true,
  },
  {
    day: 6,
    date: '2026-05-06',
    type: 'letter',
    title: 'A Reason I Love You',
    message:
      'Reason number six: you make home feel warmer, louder, funnier, and more alive in all the best ways.',
    storyChapter: 6,
  },
  {
    day: 7,
    date: '2026-05-07',
    type: 'memory',
    title: 'Memory Lane',
    message:
      'This page is reserved for a photo and short story from us. Drop the image in later and add the real caption here.',
    storyChapter: 7,
  },
  {
    day: 8,
    date: '2026-05-08',
    type: 'mission',
    title: 'You Choose',
    message:
      'Today, you control the plan. The only rule is that it should feel easy and good.',
    prompt: 'Text me A, B, or C. I will know what to do.',
    storyChapter: 8,
    hasPlan: true,
  },
  {
    day: 9,
    date: '2026-05-09',
    type: 'clue',
    title: 'The Second Hint',
    message:
      'Another piece of the birthday-month puzzle. Keep this one in your pocket.',
    prompt: 'Clue: we have been here before, but not like this.',
    storyChapter: 9,
  },
  {
    day: 10,
    date: '2026-05-10',
    type: 'letter',
    title: 'For the Way You Love',
    message:
      'This page is for the way you care for people, remember the details, and make everyone feel claimed.',
    storyChapter: 10,
    hasPlan: true,
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
    type: 'memory',
    title: 'Family Album Page',
    message:
      'This page is built for a family photo, a funny caption, and one of those memories that deserves to be kept.',
    storyChapter: 12,
    hasPlan: true,
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
      'This is the page where the weekend starts to feel real. Add the final note once the plan is locked.',
    storyChapter: 15,
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
