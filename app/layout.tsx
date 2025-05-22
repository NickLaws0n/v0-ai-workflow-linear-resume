import type { Metadata } from 'next'
import './globals.css'
import { ResumeProvider } from '@/components/resume-context'
import { Sidebar } from '@/components/sidebar'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ResumeProvider>
          <div className="flex h-screen bg-[#111213] text-white overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden bg-[#181A1B]">
              <main className="flex-1 overflow-auto px-0 py-6 md:px-8 md:py-10">
                {children}
              </main>
            </div>
          </div>
        </ResumeProvider>
      </body>
    </html>
  )
}
