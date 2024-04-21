import { SignIn } from "@clerk/nextjs";

export default function SignInComponent() {
    return (
        <div className="flex justify-center">
            <SignIn fallbackRedirectUrl={"/dashboard"} signUpUrl="/sign-up"/>
        </div>
    )
}