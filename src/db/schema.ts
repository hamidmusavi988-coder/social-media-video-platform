import { pgTable, serial, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";
export const users = pgTable("users", { id: serial("id").primaryKey(), email: text("email").notNull().unique(), name: text("name"), image: text("image"), createdAt: timestamp("created_at").defaultNow() });
export const posts = pgTable("posts", { id: serial("id").primaryKey(), userId: integer("user_id").notNull(), videoUrl: text("video_url").notNull(), caption: text("caption"), likes: integer("likes").default(0), createdAt: timestamp("created_at").defaultNow() });
export const messages = pgTable("messages", { id: serial("id").primaryKey(), fromId: integer("from_id").notNull(), toId: integer("to_id").notNull(), body: text("body").notNull(), createdAt: timestamp("created_at").defaultNow() });
