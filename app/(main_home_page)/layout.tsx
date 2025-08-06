
import Footer from '@/components/shared/Footer';

import React from 'react'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className=''>
     
       
      </div>
      <div className='min-h-screen'>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
