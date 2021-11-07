import React from 'react'
import { MainProfile } from '@components/organisms/mainProfile'
import { Carrier } from '@components/organisms/carrier'
import { About } from '@components/organisms/about'
import { Skill } from '@components/organisms/skill'

export const PageLayout: React.VFC = () => {
  const JSXArray = {
    about: <About />,
    carrier: <Carrier />,
    skill: <Skill />,
  }

  return (
    <body>
      <div className="mt-6 max-w-screen-lg md:flex mx-auto">
        <MainProfile />
        <div className="md:w-2/3 p-2 w-full">
          <ul>
            {Object.values(JSXArray).map((e, index) => (
              <li key={index} className="my-8 list-none">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </body>
  )
}
