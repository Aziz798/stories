
import { Suspense } from "react";
import StoryList from "../_components/dashboard/storyList";
function Skeleton() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-4 w-3/4 items-center">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
        </div>
    )
}
export default function Dashboard() {
    return (
    <Suspense fallback={<Skeleton/>}>
        <StoryList />
    </Suspense>
    )
}