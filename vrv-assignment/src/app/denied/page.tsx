import Link from "next/link";

export default function Denied() {
    return (
        <section className="flex flex-col gap-12 items-center">
            <h1 className="text-5xl">Permission Denied</h1>
            <p className="text-3xl max-w-2xl text-center">
                Although you’re logged in, your current access level doesn’t grant you permission to view this page. Please contact an administrator if you believe this is an error.
            </p>
            <img
                src="acess.png" 
                alt="Access Denied Illustration"
                className="w-64 h-auto" 
            />
            <Link href="/" className="text-3xl underline">
                Go Back to the Home Page
            </Link>
        </section>
    );
}

