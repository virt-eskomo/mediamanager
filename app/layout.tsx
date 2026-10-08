import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Media Manager - Social Media Planning & Publishing',
  description: 'Plan, create, and publish across all your social platforms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
