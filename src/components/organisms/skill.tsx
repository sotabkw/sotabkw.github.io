import React from 'react'
import { ChevronIcon } from '@components/uiParts/Icon/chevron'

export const Skill: React.VFC = () => {
  return (
    <div className="p-4 bg-blue-50 rounded-3xl">
      <h1 className="mb-4 text-4xl text-gray-700 font-bold tracking-widest ml-4 flex">
        <div className="mr-2 flex items-center">
          <ChevronIcon />
        </div>
        Skill
      </h1>
      <ul>
        <li className="mb-6 flex flex-wrap px-7">
          <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
            Next.js
          </span>
          <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
            React.js
          </span>
          <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
            JavaScript
          </span>
          <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
            TypeScript
          </span>
        </li>
      </ul>
    </div>
  )
}
