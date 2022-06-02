import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import { Container, Logo } from '@components/ui'
import { Menu } from '@components/icons'
import { useUI } from '@components/ui/context'
import cn from 'classnames'
import { useRouter } from 'next/router'

const Navbar: FC = () => {
  const { toggleSidebar } = useUI()
  const router = useRouter()

  const toggle = () => {
    toggleSidebar()
  }
  return (
    <Container>
      <div className={s.root}>
        <div className="md:hidden flex justify-between w-full items-center">
          <Logo />
          <Menu onClick={() => toggle()} />
        </div>
        <div className={s.nav}>
          <Link href="/overview">
            <a
              className={cn(
                s.link,
                router.asPath === '/overview' && s['link-active']
              )}
            >
              Overview
            </a>
          </Link>
          <Link href="/policy">
            <a
              className={cn(
                s.link,
                router.asPath === '/policy' && s['link-active']
              )}
            >
              Policy
            </a>
          </Link>
          <Link href="/reports">
            <a
              className={cn(
                s.link,
                router.asPath === '/reports' && s['link-active']
              )}
            >
              Reports
            </a>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
