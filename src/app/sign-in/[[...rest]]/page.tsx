import { SignIn } from "@clerk/nextjs";

export default function SignInComponent() {
    return (
        <div className="flex justify-center">
            <SignIn fallbackRedirectUrl={"/"} signUpUrl="/sign-up"/>
        </div>
    )
}