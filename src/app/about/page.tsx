import Link from "next/link";

export default function About() {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div>
                <h1 className="text-4xl font-bold">About Page</h1>
                <Link href="/">Go to Home</Link>
            </div>
        </div>
    )
}