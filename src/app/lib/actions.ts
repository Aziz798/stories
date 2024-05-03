'server-only';
import { chapter, story } from "@/db/schema";
import db from "../../db/drizzle";
import { eq, ilike, or } from "drizzle-orm";
import { Chapter, ChapterState, Story, StoryState } from "@/app/types/definitions";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { v4 as uuid } from "uuid";
// import { run } from "@/utils/gemini";

export async function getAllStories() {
    return await db.select().from(story);
};

export async function getStoryDescription(id: string) {
    try {
        return await db.select({ description: story.description }).from(story).where(eq(story.id, id));
    } catch (error) {
        console.log(error);

    }
}

export async function getStoryById(id: string) {
    return await db.select().from(story).where(eq(story.id, id));
}
export async function getStoryByIdWithChapters(id: string) {
    const result = await db
        .select()
        .from(story)
        .where(eq(story.id, id))
        .leftJoin(chapter, eq(story.id, chapter.storyId))
        .execute(); // Execute the query and fetch all rows

    return result;
}

const chapterForm = z.object({
    id: z.string(),
    storyId: z.string(),
    userId: z.string(),
    title: z.string({
        required_error: "Title is required"
    }).min(3, "Title should at least be 3 characters"),
    content: z.string({
        required_error: "Chapter is required"
    }).min(10, "Chapter should be at least 10 characters"),
    photoUrl: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});
const ChapterSchema = chapterForm.omit({ id: true, createdAt: true, updatedAt: true });

export async function createChapter(prevState: ChapterState, formData: FormData) {
    const result = ChapterSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
            message: "missing fields"
        }
    }
    const { storyId, title, content, photoUrl, userId } = result.data;
    try {
        await db
            .insert(chapter)
            .values({ id: uuid(), storyId, title, content, photoUrl, userId });
    } catch (error) {
        console.log(error);

        return { message: 'Database Error: Failed to Create Chapter.' };
    }
    revalidatePath(`/story/${storyId}`);
    redirect(`/story/${storyId}`);
}

const storyForm = z.object({
    id: z.string(),
    userId: z.string(),
    title: z.string({
        required_error: "Title is required"
    }).min(3, "Title should at least be 3 characters"),
    description: z.string({
        required_error: "Description is required"
    }).min(10, "Description should be at least 10 characters"),
    photoUrl: z.string({
        required_error: "Photo is required",
        message: "Photo is required"
    }).regex(/\.(jpg|jpeg|png|gif)$/i, "Only images are allowed").min(1, "Photo is required"),
    completed: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
});
const StorySchema = storyForm.omit({ id: true, createdAt: true, updatedAt: true, completed: true });

export async function createStory(prevState: StoryState, formData: FormData) {
    const result = StorySchema.safeParse(Object.fromEntries(formData.entries()));
    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
            message: "missing fields"
        }
    }
    const { userId, title, description, photoUrl } = result.data;
    const id = uuid();
    try {
        await db
            .insert(story)
            .values({ id, userId, title, description, photoUrl });
    } catch (error) {
        console.log(error);

        return { message: 'Database Error: Failed to Create Story.' };
    }
    redirect(`/story/${id}/new-chapter`);
}
export async function fetchFilteredStories(query: string|null) {
    if (query === null) return [];
    const stories = await db
    .select({ id: story.id, title: story.title, photoUrl: story.photoUrl, description: story.description })
    .from(story)
    .where(or(ilike(story.title, `%${query}%`), ilike(story.description, `%${query}%`)))
    .execute();
    return stories;
}
export async function storyCompleted(id: string) {
    await db.update(story).set({ completed: true }).where(eq(story.id, id));
    redirect(`/story/${id}`);
}