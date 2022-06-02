import React from 'react'
import { Text } from '@components/ui'
import Link from 'next/link'

const Unavailable = () => {
  return (
    <div className="max-w-2xl mx-8 sm:mx-auto md:py-20 flex flex-col items-center justify-center fit">
      <Text variant="heading">Not Available</Text>
      <Text className="">
        The requested page doesn&apos;t exist or hasn&apos;t been created. click
        here to redirect to
        <Link href="/reports">
          <a className="underline px-1 hover:opacity-75 text-secondary">
            Reports
          </a>
        </Link>
      </Text>
    </div>
  )
}
export default Unavailable
