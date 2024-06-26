export function StoryListSkeleton() {
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

export function StoryIntroductionSkeleton() {
    return (
        <div className="skeleton w-screen h-screen"></div>
    )
}
export function ChaptersSkeleton() {
    return (
        <>
            <div className="flex justify-center w-full h-full">
                <div className="flex flex-row gap-4 w-96 items-center m-6">
                    <div className="skeleton h-32 w-full" />
                    <div className="flex flex-col gap-4 w-96">
                        <div className="skeleton h-4 w-28" />
                        <div className="skeleton h-4 w-40" />
                        <div className="skeleton h-4 w-40" />
                    </div>
                </div>
                <div className="flex flex-row gap-4 w-96 items-center m-6">
                    <div className="skeleton h-32 w-full" />
                    <div className="flex flex-col gap-4 w-96">
                        <div className="skeleton h-4 w-28" />
                        <div className="skeleton h-4 w-40" />
                        <div className="skeleton h-4 w-40" />
                    </div>
                </div>

            </div>
            <div className="flex justify-center w-full h-full">
                <div className="flex flex-row gap-4 w-96 items-center m-6">
                    <div className="skeleton h-32 w-full" />
                    <div className="flex flex-col gap-4 w-96">
                        <div className="skeleton h-4 w-28" />
                        <div className="skeleton h-4 w-40" />
                        <div className="skeleton h-4 w-40" />
                    </div>
                </div>
                <div className="flex flex-row gap-4 w-96 items-center m-6">
                    <div className="skeleton h-32 w-full" />
                    <div className="flex flex-col gap-4 w-96">
                        <div className="skeleton h-4 w-28" />
                        <div className="skeleton h-4 w-40" />
                        <div className="skeleton h-4 w-40" />
                    </div>
                </div>

            </div>
        </>
    )
}