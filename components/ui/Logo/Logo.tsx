import { LogoIcon } from '@components/icons'
import Link from 'next/link'

const Logo = ({ className = '', ...props }) => (
  <Link href="/reports">
    <a className="flex items-center justify-center">
      <LogoIcon />
      <h1 className="ml-4 font-semibold text-black select-none">
        Insurance Portal
      </h1>
    </a>
  </Link>
)

export default Logo
