import type { Metadata } from 'next'
import './globals.css'
import { bodyFont, inter } from '../config/fonts'



export const metadata: Metadata = {
  title: 'Benjamín La Valla Modeling Porfolio',
  description: 'A professional photo portfolio for male model',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${bodyFont.className} bg-black/90`}>{children}</body>
    </html>
  )
}
