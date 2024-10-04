import { db, Potatoes } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Potatoes).values({
    potatId: '1',
    name: 'Russet',
    andersRating: 1,
    linnRating: 2,
  });

  await db.insert(Potatoes).values({
    potatId: '2',
    name: 'Yukon Gold',
    andersRating: 4,
    linnRating: 3,
  });
}
