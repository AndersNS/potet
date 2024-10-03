import { defineDb, defineTable, column } from 'astro:db';

export const Potatoes = defineTable({
  columns: {
    potatId: column.text({ primaryKey: true }),
    name: column.text(),
    andersRating: column.number(),
    linnRating: column.number(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Potatoes },
});
