import { Chapter } from "@/app/types/definitions";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
    subsets: ["latin"],
    weight: "500",
});

export default function Chapters({ chapters }: { chapters: Chapter[] }) {
    return (
        <>
            {chapters.map((chapter, ind) => {
                return (
                    <div key={chapter.id}>
                        <div className={`hero min-h-100 bg-base-200 ${roboto.className}`}>
                            <div className="hero-content lg:flex-row md:flex-row sm:flex-col">

                                {
                                    ind % 2 == 0 ? (
                                        <div className="flex flex-row justify-center items-center lg:flex-row md:flex-row sm:flex-col">
                                            <div className="order-2 lg:order-1 md:order-1 sm:order-2 mb-6 lg:mb-0 md:mb-0 sm:mb-6">
                                                <h1 className="text-5xl font-bold">{chapter.title}</h1>
                                                <p className="py-6 max-w-fit">{chapter.content}</p>
                                            </div>
                                            <div className="order-1 lg:order-2 md:order-2 sm:order-1 mb-6 lg:mb-0 md:mb-0 sm:mb-6">
                                                <Image alt={chapter.title} src={chapter.photoUrl!} className="max-w-sm rounded-lg shadow-2xl" width={500} height={500} />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-row justify-center items-center lg:flex-row md:flex-row sm:flex-col">
                                            <div className="order-1 lg:order-2 md:order-2 sm:order-1 mb-6 lg:mb-0 md:mb-0 sm:mb-6">
                                                <Image alt={chapter.title} src={chapter.photoUrl!} className="max-w-sm rounded-lg shadow-2xl" width={500} height={500} />
                                            </div>
                                            <div className="order-2 lg:order-1 md:order-1 sm:order-2 mb-6 lg:mb-0 md:mb-0 sm:mb-6">
                                                <h1 className="text-5xl font-bold">{chapter.title}</h1>
                                                <p className="py-6 max-w-fit">{chapter.content}</p>
                                            </div>

                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
