import { SignUp } from "@clerk/nextjs";

export default function Register() {
    return (
        <div className="flex justify-center">
            <SignUp fallbackRedirectUrl={"/dashboard"} signInUrl="/sign-in" />
        </div>
    )
}