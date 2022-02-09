import React from 'react'
import { ChevronIcon } from '@components/uiParts/Icon/chevron'

export const About: React.VFC = () => {
  return (
    <div className="p-4 bg-blue-50 rounded-3xl">
      <h1 className="mb-4 text-4xl text-gray-700 font-bold tracking-widest ml-4 flex">
        <div className="mr-2 flex items-center">
          <ChevronIcon />
        </div>
        About
      </h1>
      <p className="text-lg px-7 font-sans">
        Hi, my name is Sota. Welcome to my site. I'm a Software Engineer. I like
        the front-end, so I want to pursue technical pursuits and at the same
        time pursue how to deliver excellent UI/UX to users as a product.
        However, I am also interested in the back-end and am currently studying.
      </p>
    </div>
  )
}
