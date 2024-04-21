import { relations } from "drizzle-orm";
import {  text, boolean, pgTable, varchar, date } from "drizzle-orm/pg-core";
import {v4 as uuid} from "uuid";


export const story = pgTable("stories",{
  id : varchar("id",{length: 100}).default(uuid()).primaryKey(),
  userId : varchar("user_id",{length: 100}).notNull(),
  title : text("title").notNull(),
  description : text("description").notNull(),
  photoUrl : text("photo_url").notNull(),
  completed : boolean("completed").default(false).notNull(),
  createdAt : date("created_at").defaultNow().notNull(),
  updatedAt : date("updated_at").defaultNow().notNull(),
});

export const chapter = pgTable("chapters",{
  id : varchar("id",{length: 100}).default(uuid()).primaryKey(),
  storyId : varchar("story_id",{length: 100}).references(() => story.id).notNull(),
  userId : varchar("user_id",{length: 100}).notNull(),
  title : text("title").notNull(),
  content : text("content").notNull(),
  photoUrl : text("photo_url"),
  createdAt : date("created_at").defaultNow().notNull(),
  updatedAt : date("updated_at").defaultNow().notNull(),
});

export const storyRelations =relations(story, ({ many }) => ({
  chapters: many(chapter),
}));