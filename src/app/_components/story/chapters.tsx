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
            {
                chapters.map((chapter, ind) => {
                    return (
                        <div key={chapter.id}>
                            {
                                ind % 2 === 0 ? (
                                    <div className={`hero min-h-100 bg-base-200 ${roboto.className}`}>
                                        <div className="hero-content flex-row lg:flex-row">
                                            <div>
                                            <img alt={chapter.title} src={chapter.photoUrl!} className="max-w-sm rounded-lg shadow-2xl h-fit w-fit" />
                                            </div>
                                            <div>
                                                <h1 className="text-5xl font-bold">{chapter.title}</h1>
                                                <p className="py-6">{chapter.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={`hero min-h-100 bg-base-200 ${roboto.className}`}>
                                        <div className="hero-content flex-row-reverse lg:flex-row">
                                            <div>
                                                <h1 className="text-5xl font-bold">{chapter.title}</h1>
                                                <p className="py-6">{chapter.content}</p>
                                            </div>
                                            <div>
                                            <img alt={chapter.title} src={chapter.photoUrl!} className="max-w-sm rounded-lg shadow-2xl" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </>
    )
}