import Link  from 'next/link'

export default function Home(){
  return (
    <main>
      <h2>Homepage</h2>
      <Link href="/about">About us</Link>
    </main>
  )
}