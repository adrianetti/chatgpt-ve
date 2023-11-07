import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { getServerSession } from 'next-auth'

import Sidebar from '@/components/Sidebar'
import SessionProvider from '@/components/SessionProvider'
import Login from '@/components/Login'
import { authOptions } from '@/pages/api/auth/[...nextauth]'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AdrianGPT',
  description: 'ChatGPT para Venezuela',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        {!session ? (
          <Login />
        ) : (
          <SessionProvider session={session}>
            <div className="flex">
              {/* Sidebar */}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>

              <div className="bg-[#343541] flex-1">
                {children}
              </div>
            </div>
          </SessionProvider>
        )}

      </body>
    </html>
  )
}
