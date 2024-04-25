import { StoryIntroductionSkeleton } from "@/app/_components/shared/skeletons";
import StoryIntroduction from "@/app/_components/story/storyIntoduction";
import { Suspense } from "react";

export default function StoryLayout({ children, params }: { children: React.ReactNode, params: { id: string } }) {
    return (
        <div>
            <Suspense fallback={<StoryIntroductionSkeleton />}>
                <StoryIntroduction id={params.id} />
            </Suspense>
            {children}
        </div>
    );
}