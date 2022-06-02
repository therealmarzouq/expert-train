import { FC } from 'react'
import NextHead from 'next/head'

const Head: FC = () => {
  return (
    <>
      <NextHead>
        <title>Insurance Portal</title>
        <meta property="og:title" content="Insurance Portal" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>
    </>
  )
}

export default Head
