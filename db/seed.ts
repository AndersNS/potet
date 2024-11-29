import { db, Potatoes } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Potatoes).values([
    {
      potatId: '1',
      name: 'Russet Burbank',
      andersRating: 1,
      linnRating: 2,
      infoLink: 'https://en.wikipedia.org/wiki/Russet_Burbank',
    },
    {
      potatId: '2',
      name: 'Yukon Gold',
      andersRating: 4,
      linnRating: 3,
      infoLink: '',
      comment: 'Sliter med råte og diverse andre problemer.',
    },
    {
      potatId: '3',
      name: 'Mandel',
      andersRating: 0,
      linnRating: 0,
      infoLink: 'https://en.wikipedia.org/wiki/Russet_Burbank',
    },
  ]);
}
