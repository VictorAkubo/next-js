import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession,signIn,signOut } from 'next-auth/react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  if (!session) {
    return <>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </>
  }
  return (
    <div className='bg-blue-900 h-screen '>
      <Nav />
      <div>User is logged In </div>
    </div>

  )
}
