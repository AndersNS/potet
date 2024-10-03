import { db, Potatoes } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Potatoes).values({
    potatId: '1',
    name: 'Russet',
    andersRating: 0,
    linnRating: 0,
  });
}
