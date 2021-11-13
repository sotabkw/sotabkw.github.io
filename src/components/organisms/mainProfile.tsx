import React from 'react'
import { LocationIcon } from '@components/uiParts/Icon/location'
import { MailIcon } from '@components/uiParts/Icon/mail'
import { GithubIcon } from '@components/uiParts/Icon/github'
import { TwitterIcon } from '@components/uiParts/Icon/twitter'

export const MainProfile: React.VFC = () => {
  return (
    <div className="md:w-1/3 p-2 relative">
      <div className="md:fixed">
        <div className="md:block">
          <div className="flex justify-center  h-auto">
            <img
              className="rounded-full self-start"
              src="/favicon.ico"
              width={150}
              height={150}
              alt="プロフィール画像"
            />
          </div>
          <div className="mb-12 text-center mt-4 justify-center items-center">
            <h1 className="text-2xl text-gray-800 font-semibold tracking-widest">
              Sota　Watanabe
            </h1>
            <div className="md:text-sm text-sm text-gray-600 pt-2">
              Frontend Web Developer
            </div>
          </div>
        </div>
        <div className="mx-4 my-4 md:block pr-12">
          <div className="my-5 text-lg text-gray-600 flex">
            <a
              href="mailto:stst819&#64;icloud.com"
              className="text-lg text-blue-300 flex hover:text-blue-400 transition-colors"
            >
              <div className="mr-2">
                <MailIcon />
              </div>
              stst819@icloud.com
            </a>
          </div>
          <a
            href="https://github.com/sotabkw"
            className="my-5 text-lg text-blue-300 flex hover:text-blue-400 transition-colors"
          >
            <div className="mr-2">
              <GithubIcon />
            </div>
            @sotabkw
          </a>
          <a
            href="https://twitter.com/sota_bkw"
            className="my-5 text-lg text-blue-300 flex hover:text-blue-400 transition-colors"
          >
            <div className="mr-2">
              <TwitterIcon />
            </div>
            @sota_bkw
          </a>
          <div className="my-5 text-lg text-gray-600 flex">
            <div className="mr-2">
              <LocationIcon />
            </div>
            Hiroshima, Japan
          </div>
        </div>
      </div>
    </div>
  )
}
