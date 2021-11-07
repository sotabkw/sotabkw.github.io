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
      <p className="text-lg px-7">
        Hi, my name is Sota. Welcome to my corner of the Internet. I'm a
        frontend web engineer. I like the front end, so I want to pursue
        technical pursuits and at the same time pursue how to deliver excellent
        UI/UX to users as a product.
      </p>
    </div>
  )
}