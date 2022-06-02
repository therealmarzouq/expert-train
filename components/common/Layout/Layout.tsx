import cn from 'classnames'
import React, { FC } from 'react'
import { useUI } from '@components/ui/context'
import { Navbar } from '@components/common'
import { Sidebar } from '@components/ui'

import s from './Layout.module.css'

interface Props {
  children: React.ReactNode
  pageProps?: {
    pages?: any[]
  }
}

const SidebarView: FC<{ closeSidebar(): any }> = ({ closeSidebar }) => {
  return <Sidebar onClose={closeSidebar} />
}

const SidebarUI: FC = () => {
  const { closeSidebar } = useUI()
  return <SidebarView closeSidebar={closeSidebar} />
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={cn(s.root)}>
      <SidebarUI />
      <div className="w-full md:ml-72">
        <Navbar />
        <main className={cn('fit p-6')}>{children}</main>
      </div>
    </div>
  )
}

export default Layout
