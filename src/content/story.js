const placeholderChapter = (chapter) => {
  const day = String(chapter).padStart(2, '0');

  return {
    chapter,
    date: `2026-05-${day}`,
    title: chapter === 17 ? 'Birthday Queen Day' : `Chapter ${chapter}: Page ${chapter}`,
    body: [
      `This is placeholder text for chapter ${chapter} of Bae's Anatomy.`,
      'Replace this with the real story entry when it is ready. Each chapter unlocks on the same day as its matching scrapbook page.',
      'Keep chapters short enough to feel good on a phone, like a page from a tiny book made just for Jessica.',
    ],
  };
};

export const storyChapters = [
  {
    chapter: 1,
    date: '2026-05-01',
    title: 'Chapter 1: The Calm Within the Storm',
    body: [
      'Panic is in the air. Celeste is sobbing louder as precious seconds are going by. Nathaniel is saying all the wrong words trying to calm Celeste down. Christopher is looking aimlessly around trying to find the forceps that are evading him even though they are right in front of his face. And Jon, ummm, he thinks he is here just for his handsome looks. My resolve is unshaken as I silently mouth the process. "Breathe. Assess. Pressure. Inspect. Approximate." It keeps me focused and my mind on the task. I am the calm island in the storm of chaos around me.',
      'Celeste has been crying uncontrollably in the corner since they arrived. She brought her husband in because he was trampled by an out of control carriage. He moved her out the way to keep her from being hit first. The incident has left poor Treyveon with a severely fractured leg and a large open wound on his abdomen. Celeste was able to help the big lug to my care facility a few blocks away. Which is as fortunate as can be in this situation.',
      'Blood JUMPS from the wound and startles Nathaniel, which drives Celeste into an even deeper panic. Jon grabs the tools, hands them to me, and smiles bright...mission accomplished like he is really helping. I continue to mouth the process, I zone in, I lower my heart rate, I center myself and reach to the God given grace within me. The well of grace I normally feel has been slippery lately. It has caused a bit of unease within me. But I cannot worry about that now. This wound cannot wait.',
      'I dig within grasping for my grace, the temperature in the room feels HIGH. I glance at Jon who tries to read my mind. And like magic, he heads to the thermostat. I do not have much time, Treyveon has lost a lot of blood already but I got this. I dig even deeper and feel the strands of my grace. I lend them to Treyveon, slowly closing the rupture that has hit a few internal organs. Celeste\'s mouth falls open but she is silent for the first time and she witnesses the process. The grace was barely enough to get him patched up internally. Steam slowly arises from the wound as Treyveon lets out a small groan of relief.',
      'The bleeding lessens. Jon takes over and begins stitching the skin. Immediate crisis averted. Treyveon will live. Our facility is low on many supplies so we do what we can with patching the flesh and getting his leg in a brace. Celeste and Treyveon will have to venture into town to get the leg fully casted but the hard part is over. They can begin to heal mentally as well as physically. We graciously accept what little credits they have to offer. Times are tough for everyone. The whole village is struggling. Restoration Care is struggling but by His grace...we will find a way.',
      'I walk them to the door and wave as they walk away. The cool evening air feels good and provides a moment of peace and stillness in contrast to the tense and fiery moments before. I enjoy this moment of calm before it is interrupted by the sound of glass shattering. Yup, that sounds about right.',
    ],
  },
  ...Array.from({ length: 16 }, (_, index) => placeholderChapter(index + 2)),
];
