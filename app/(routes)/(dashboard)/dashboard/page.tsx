"use client"

import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const DashboardPage = () => {

  const { data: session, status } = useSession();
  console.log(session)
  return (
    <div>DashboardPage
        <button onClick={() => signOut({
            callbackUrl: "http://localhost:3000/login"
        })}>Sign Out</button>

        <h1>HI {session?.user?.name}</h1>
    </div>
  )
}

export default DashboardPage