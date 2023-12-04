import { ReactNode } from 'react'
import Header from '@/components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="gap 5 mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app p-8">
      <Header />
      {children}
    </div>
  )
}
