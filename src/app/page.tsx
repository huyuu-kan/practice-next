import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
          <h1 className="text-4xl font-bold">Hello Next!</h1>
         <Link href="/about">Go to About</Link>
      </div>
    </div>
  );
}
