import {getAllStories} from "@/server/actions";
import Image from "next/image";
import Link from "next/link";

export default async function StoryList() {
    const stories = await getAllStories();

    return (
        <div className="content-center">
            <div className="w-full carousel rounded-box">
                {
                    stories.map(story => {
                        return (
                            <div key={story.id} className="carousel-item w-full flex justify-center items-center">
                                <div className="card w-3/4 bg-base-100 shadow-xl">
                                    <figure>
                                        <Image src={story.photoUrl}
                                            alt={story.title} width={500}
                                            height={500}
                                            loading="lazy"
                                            className="w-fit h-fit"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{story.title}</h2>
                                        <p>{story.description}</p>
                                        <div className="card-actions justify-end">
                                            <Link href={`story/${story.id}`} className="btn btn-primary">read {story.title}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
