import { SignUp } from "@clerk/nextjs";

export default function Register() {
    return (
        <div className="flex justify-center">
            <SignUp fallbackRedirectUrl={"/"} signInUrl="/sign-in" />
        </div>
    )
}