export default function StoryListSkeleton() {
    return (
        <div className="flex justify-center w-full h-full">
            <div className="flex flex-col gap-4 w-full items-center">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
        </div>
    )
}