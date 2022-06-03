import React, { FC, forwardRef } from 'react'
import s from './Banner.module.css'
import { Button } from '@components/ui'
import IllustrationOne from './IllustrationOne'
import BackgroundIllustration from './BackgroundIllustration'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'

const Banner = () => {
  return (
    <div className={s.root}>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center">
        <IllustrationOne className="h-auto w-full" />
        <div className="py-8 px-2 text-center flex w-full flex-col justify-center items-center md:-ml-24">
          <h1 className="font-semibold text-3xl px-1 md:px-0">
            20% Safe On Your First Account
          </h1>

          <div className="flex items-center mt-2 z-30">
            <span className="border border-dashed rounded border-secondary px-4 pt-1.5 pb-1 text-xl mx-2 select-auto">
              NEWBIE20
            </span>
            <CopyToClipboard
              text={'NEWBIE20'}
              onCopy={() =>
                toast('Copied!', { position: 'top-center', icon: '✅' })
              }
            >
              <Button variant="naked" className="text-xl mx-2 font-semibold">
                Copy Code
              </Button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      <BackgroundIllustration
        className={'w-full h-auto absolute bottom-0 z-20'}
      />
    </div>
  )
}

Banner.displayName = 'Banner'
export default Banner
