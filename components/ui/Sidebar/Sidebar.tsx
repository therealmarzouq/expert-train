import { FC, useRef } from 'react'
import Image from 'next/image'
import s from './Sidebar.module.css'
import cn from 'classnames'
import Logo from '../Logo'
import Link from 'next/link'
import {
  Company,
  Document,
  LogOut,
  Overview,
  Report,
  Shield,
  UserCircle,
  X,
} from '@components/icons'
import { useUI } from '@components/ui/context'
import Button from '../Button'
import { useRouter } from 'next/router'

interface SidebarProps {
  onClose: () => void
}

const Sidebar: FC<SidebarProps> = ({ onClose }) => {
  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const { displaySidebar } = useUI()
  const router = useRouter()

  const onKeyDownSidebar = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Escape') {
      onClose()
    }
  }

  const rootClassName = cn(s.root, {
    ['hidden md:block']: !displaySidebar,
  })

  return (
    <div
      className={rootClassName}
      ref={sidebarRef}
      onKeyDown={onKeyDownSidebar}
      tabIndex={1}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className={s.backdrop} onClick={onClose} />
        <section className="absolute inset-y-0 left-0 max-w-full flex outline-none">
          <div className="h-full w-full md:w-screen md:max-w-md">
            <div className={s.sidebar} ref={contentRef}>
              <div className="flex justify-end mb-1 md:hidden w-full -mr-16">
                <X onClick={onClose} />
              </div>
              <div className="">
                <Logo />
                <div className={s['profile-avatar-container']}>
                  <div className="relative h-20 w-20 rounded-full">
                    <Image
                      src={
                        'https://res.cloudinary.com/dbbpapuyc/image/upload/v1654166676/christopher-campbell-rDEOVtE7vOs-unsplash_1.jpg'
                      }
                      layout="fill"
                      className="rounded-full"
                      objectFit="cover"
                      alt="Profile Picture"
                    />
                  </div>
                </div>
                <h2 className="font-bold mb-0.5 leading-5 tracking-wide select-none text-primary-4">
                  Hello ! Rusalba Ruiz
                </h2>
                <p className="mb-0.5 leading-3 text-primary select-none my-2 text-xxs">
                  Welcome Back To Your Insurance Portal
                </p>
                <p className="text-sm text-primary select-none my-2">
                  Your Plan : <span className="text-green">Free</span>
                </p>
                <Button variant="primary" className="my-4" onClick={onClose}>
                  Create New Plan &nbsp; +
                </Button>
              </div>
              <nav className={s['sidebar-menu']}>
                <Link href="/overview">
                  <a
                    className={cn(
                      s['sidebar-menu-link'],
                      router.asPath === '/overview' && s['sidebar-menu-active']
                    )}
                    onClick={onClose}
                  >
                    <Overview className={cn(s['sidebar-menu-icon'])} />
                    <span className={s['sidebar-menu-text']}>Overview</span>
                  </a>
                </Link>
                <Link href="/policy">
                  <a
                    className={cn(
                      s['sidebar-menu-link'],
                      router.asPath === '/policy' && s['sidebar-menu-active']
                    )}
                    onClick={onClose}
                  >
                    <Shield className={cn(s['sidebar-menu-icon'])} />
                    <span className={s['sidebar-menu-text']}>Policy</span>
                  </a>
                </Link>
                <Link href="/reports">
                  <a
                    className={cn(
                      s['sidebar-menu-link'],
                      router.asPath === '/reports' && s['sidebar-menu-active']
                    )}
                    onClick={onClose}
                  >
                    <Report className={cn(s['sidebar-menu-icon'])} />
                    <span className={s['sidebar-menu-text']}>Reports</span>
                  </a>
                </Link>
                <Link href="/company">
                  <a
                    className={cn(
                      s['sidebar-menu-link'],
                      router.asPath === '/company' && s['sidebar-menu-active']
                    )}
                    onClick={onClose}
                  >
                    <Company className={cn(s['sidebar-menu-icon'])} />
                    <span className={s['sidebar-menu-text']}>Company</span>
                  </a>
                </Link>
                <Link href="/user-account">
                  <a
                    className={cn(
                      s['sidebar-menu-link'],
                      router.asPath === '/user-account' &&
                        s['sidebar-menu-active']
                    )}
                    onClick={onClose}
                  >
                    <UserCircle className={cn(s['sidebar-menu-icon'])} />
                    <span className={s['sidebar-menu-text']}>User Account</span>
                  </a>
                </Link>
                <Link href="/history">
                  <a
                    className={cn(
                      s['sidebar-menu-link'],
                      router.asPath === '/history' && s['sidebar-menu-active']
                    )}
                    onClick={onClose}
                  >
                    <Document className={cn(s['sidebar-menu-icon'])} />
                    <span className={s['sidebar-menu-text']}>History</span>
                  </a>
                </Link>
                <Link href="/">
                  <a className={cn(s['sidebar-menu-link'])} onClick={onClose}>
                    <LogOut className={cn(s['sidebar-menu-icon'])} />
                    <span className={cn(s['sidebar-menu-text'])}>Logout</span>
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Sidebar
