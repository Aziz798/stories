
import { Suspense } from "react";
import StoryList from "../_components/dashboard/storyList";
import StoryListSkeleton from "../_components/shared/skeletons";
export default function Dashboard() {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Read our latest stories</h1>
                        <p className="py-6">
                            Welcome to our community of storytellers! Here, we embark on collaborative journeys, weaving tales together into vibrant narratives. Join us in the adventure of creation, where every word written is a step towards crafting something truly extraordinary.
                        </p>
                    </div>
                    <Suspense
                        fallback={
                            <div className="w-1/2">
                                <StoryListSkeleton />
                            </div>}>
                        <div>
                            <StoryList />
                        </div>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}