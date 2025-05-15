import type { Metadata } from "next";

export const metadata : Metadata = {
  title: 'Home',
  description: 'Aplikasi untuk belajar nextjs',
  authors: [{name:'riven', url:'http://localhost:3000'}]
}

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      Hello World
    </main>
  );
}
