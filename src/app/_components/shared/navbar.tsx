"use client"
import { SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
    const { user } = useUser();
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link href={"/"} className="btn btn-ghost text-xl">Stories</Link>
            </div>
            <div className="navbar-end">
                <SignedOut>
                    <div className="flex gap-5">
                        <Link href={"/sign-in"} className="btn btn-outline btn-success">Sign In</Link>
                        <Link href={"/sign-up"} className="btn btn-outline">Sign Up</Link>
                    </div>
                </SignedOut>
                <SignedIn>
                    <div className="flex gap-6">
                        <div className="text-lg font-semibold">
                            <h2>Hello {user?.username}</h2>
                        </div>
                        <div>
                            <UserButton  afterSignOutUrl="/"  />
                        </div>
                    </div>
                </SignedIn>
            </div>
        </div>
    )
}