import Link from "next/link"

export default function Review(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-9xl text-center">
        -ON GOING-
      </h1>
      <h2 className="mb-5 text-xl">
        Page Under Construction
      </h2>
      <Link href={'/'} className="bg-blue-700 text-white p-3">
        Back To Home
      </Link>
    </div>
  )
}