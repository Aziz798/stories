import { story } from "@/db/schema";
import db from "../db/drizzle";
export default async function getAllStories() {
    return await db.select().from(story);
}