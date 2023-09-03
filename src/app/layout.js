import './globals.css'
import {Poppins} from 'next/font/google'
import {Silkscreen} from 'next/font/google'


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
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}