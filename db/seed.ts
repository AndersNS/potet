import { db, Potatoes } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Potatoes).values([
    {
      name: 'Russet Burbank',
      andersRating: 1,
      linnRating: 2,
      infoLink: 'https://en.wikipedia.org/wiki/Russet_Burbank',
    },
    {
      name: 'Yukon Gold',
      andersRating: 4,
      linnRating: 3,
      infoLink: '',
    },
  ]);
}
