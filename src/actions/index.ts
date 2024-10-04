import { z } from 'astro/zod';
import { defineAction } from 'astro:actions';
import { db, Potatoes, eq } from 'astro:db';

export const server = {
  updateAndersRating: defineAction({
    input: z.object({ potatoId: z.string(), current: z.number() }),
    handler: async ({ potatoId, current }) => {
      const mutate = await db
        .update(Potatoes)
        .set({
          andersRating: current,
        })
        .where(eq(Potatoes.potatId, potatoId))
        .returning()
        .get();

      return mutate?.andersRating ?? 0;
    },
  }),
  updateLinnRating: defineAction({
    input: z.object({ potatoId: z.string(), current: z.number() }),
    handler: async ({ potatoId, current }) => {
      const mutate = await db
        .update(Potatoes)
        .set({
          linnRating: current,
        })
        .where(eq(Potatoes.potatId, potatoId))
        .returning()
        .get();

      return mutate?.linnRating ?? 0;
    },
  }),
};
