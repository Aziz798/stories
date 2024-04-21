import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/dist/client/link";

export default function Hero() {
    return (<div className="hero min-h-screen" style={{ backgroundImage: `url('/storytelling-4203628.jpg')` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-base-200">Hello there</h1>
                <p className="mb-5 text-blue-200">Stories is where imagination meets community. Build your story or join forces with others - it is free and open-source!</p>
                <SignedIn>
                <Link href={"/dashboard"} className="btn btn-primary">Get Started</Link>
                </SignedIn>
                <SignedOut>
                <Link href="/sign-in" className="btn btn-primary">Get Started</Link>
                </SignedOut>
            </div>
        </div>
    </div>
    )
}