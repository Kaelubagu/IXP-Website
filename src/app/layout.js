import './globals.css'
import {Poppins} from 'next/font/google'
import {Silkscreen} from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const silkscreen = Silkscreen({ 
  subsets: ['latin'], 
  weight: ['400', '700']
})

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '700', '900']
})


export const metadata = {
  title: 'Iota Chi Rho',
  description: 'The Alternative Fraternity of Trinity University',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}<Analytics /></body>
    </html>
  )
}
