export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export function getFunName() {
  const adjectives = [
    'nonstop',
    'certain',
    'thoughtful',
    'holistic',
    'forgetful',
    'feeble',
    'verdant',
    'second',
    'hurried',
    'earsplitting',
    'aboard',
    'wrong',
    'impolite',
    'oceanic',
    'wretched',
  ];

  const nouns = [
    'passenger',
    'flight',
    'nation',
    'sticks',
    'fall',
    'floor',
    'maid',
    'sea',
    'throat',
    'home',
    'hobbies',
    'cakes',
    'secretary',
    'start',
    'anger',
  ];

  return `${rando(adjectives)}-${rando(nouns)}-clinic`;
}
