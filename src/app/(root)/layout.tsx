import StreamVideoProvider from '@/providers/StreamClientProvider'
import React from 'react'

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Meet Pro",
  description: "Meet pro is a video calling App",
  icons: {
    icon: "/icons/logo.png",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout