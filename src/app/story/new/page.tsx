import NewStoryHero from "@/app/_components/story/new/newStoryHero";
import StoryForm from "@/app/_components/story/new/story-form";
import "@uploadthing/react/styles.css";
export default function NewStory() {
    return (
        <div>
            <NewStoryHero/>
            <StoryForm/>
        </div>
    );
}