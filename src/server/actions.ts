import { chapter, story } from "@/db/schema";
import db from "../db/drizzle";
import { eq } from "drizzle-orm";
import { Story } from "@/app/types/definitions";

export async function getAllStories() {
    return await db.select().from(story);
}

export async function getStoryById(id: string) {
    const result = await db
        .select()
        .from(story)
        .where(eq(story.id, id))
        .leftJoin(chapter, eq(story.id, chapter.storyId))
        .execute(); // Execute the query and fetch all rows

    return result;
}