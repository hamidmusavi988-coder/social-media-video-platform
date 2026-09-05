import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  url: text('url').notNull(),
  caption: text('caption'),
  username: text('username').notNull().default('hamid.user'),
  likes: integer('likes').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
