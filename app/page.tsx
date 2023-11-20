import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Next.js Code Challenge</h1>
      <Link href="/users">Users page</Link>
    </main>
  )
}
