// "use client"
import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import { store } from '@/redux/store';
import { Provider, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({
  children,
  DarkMode
}: {
  children: React.ReactNode,
  DarkMode:RootState
}) {

  // const DarkMode = useSelector((state:RootState)=>state)
  console.log(DarkMode)

  return (
    <html lang="en" className="dark">
      {/* <Provider store={store}> */}
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
      {/* </Provider> */}
    </html>
  )
}
