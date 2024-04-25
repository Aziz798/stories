'use server'
import { chapter, story } from "@/db/schema";
import db from "../../db/drizzle";
import { eq } from "drizzle-orm";
import { ChapterState, Story } from "@/app/types/definitions";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { v4 as uuid} from "uuid";

export async function getAllStories() {
    return await db.select().from(story);
}
export async function getStoryById(id:string){
    return await db.select().from(story).where(eq(story.id,id));
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
    title: z.string(),
    content: z.string(),
    photoUrl: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});
const ChapterSchema = chapterForm.omit({id:true,createdAt:true,updatedAt:true});

export async function createChapter(prevState:ChapterState,formData:FormData) {
    const result = ChapterSchema.safeParse(Object.fromEntries(formData.entries()));
    if(!result.success){
        return {
            errors: result.error.flatten().fieldErrors,
            message:"missing fields"
        }
    }
    const { storyId, title, content, photoUrl,userId } = result.data;
    try {
        await db
            .insert(chapter)
            .values({id:uuid(), storyId, title, content, photoUrl,userId });
    } catch (error) {
        console.log(error);
        
        return { message: 'Database Error: Failed to Create Chapter.' };
    }
    revalidatePath(`/story/${storyId}`);
    redirect(`/story/${storyId}`);
}