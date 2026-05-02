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
  {
    chapter: 2,
    date: '2026-05-02',
    title: 'Chapter 2: Blue Dusk and Broken Vials',
    body: [
      '“WHY DID YOU BUMP INTO ME CHRISTOPHER!?” Nathaniel shouts at Christopher who responds sarcastically “IT’S FIINNNEEEEE“. I turn around and see Nathaniel and Christopher fussing at each other and standing over lab vials.',
      'Ahh the joy of having your two teenage sons help out around the facility. It was cute at first when they were younger. They still had the childlike determination to help and follow instructions. Newfound muscles to lift things and help build a new section of the facility. And then teenage self realization hits and their moods, motivations, and energies changed. They are no longer my babies but soon to be adults ready to leave the nest. It is bittersweet as a mother to see the seeds you planted grow but also it might be time for them to leave and stop ruining my practice!',
      '“Nathaniel clean that up now! Christopher, if you do not have that inventory list to me by the end of the night, you are not going to that Blue Dusk,” I say sternly as they groan in their displeasure. Their shenanigans are becoming too much. We are already low on supplies and we cannot waste what little we have right now.',
      'Everything is low right now. Low on energy, grace, time, credits, and any sign that the rest of the evening will be enjoyable. We have too much going on and not enough of anything. Barring any emergencies, Treyveon is the last patient I have the desire or grace to see tonight. The boys and I tidy up the front. We all had dropped everything as soon as Celeste burst in earlier. They chat about their plans at Blue Dusk. What they will wear and who they will talk to.',
      'I miss going to Blue Dusk. Being young and full of hormones, anxiety, and energy. Choosing which light blue to wear. The awkward exchanges between potential suitors as you would promenade around the plateau. Jumping into the Rosa River with Jon.',
      '“You know I met your dad at Blue Dusk” I say to the boys with a smile. The look of disgust on the boy’s face is a brief moment of joy.',
      '“Speaking of, where is your Dad?” I ask them as I finish organizing Nathaniel’s reception desk. The look of obliviousness on their faces take me right to the edge. Getting teens to care about anything other than immediate self is Samson-esque task. And I do not have the strength in me right now.',
      'I head to the back, the boys brought me to the edge and Jon is here with the final push!',
      '“WAKE UP!” I yell uncontrollably. Jon’s eyes shoot open and he frantically starts moving.',
      '“HOW ARE YOU ASLEEP!?” I blurt out with a mix of confusion and astonishment.',
      '“I wasn’t asleep, I was just making sure the waiting chair was good. Poor Celeste, had made a mess over here.” Jon wakes up like he was not just fast asleep. Our operating room is disorganized and half clean. Jon did a decent job at cleaning up the fluid mess but he is far from getting it back to a reset point.',
      '“I got this! I will finish up down here then I will cook up some poultry and rice. Then we can enjoy the rest of the evening.” He says as he comes over and tries to kiss and hug me. I move away, sweet nothings will not get Restoration Care ready for tomorrow.',
      'Jon resumes organizing the operating room and I begin straightening the chairs where Celeste and Nathaniel were sitting doing the operation. I sit down for a second just to color my thoughts. Jon smirks and lets out a quick chuckle. I shoot him a menacing glance because nothing is funny right now. I take a deep breath to reset. And then another. “BREATHE” I say to myself.',
      'One breath at a time.',
      'One moment at a time.',
      'One step at a time.',
      'I try to assess the situation but I can not focus. I just breathe.',
      'zzzzzzzzzzzzzzzzzzzzzz',
    ],
  },
  ...Array.from({ length: 15 }, (_, index) => placeholderChapter(index + 3)),
];
