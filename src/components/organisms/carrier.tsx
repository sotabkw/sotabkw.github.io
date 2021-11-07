import React from 'react'
import { ResumeBar } from '@components/organisms/resumeBar'
import { CareerContents } from '@components/util/constant/carrierContent'
import { ChevronIcon } from '@components/uiParts/Icon/chevron'

export const Carrier: React.VFC = () => {
  return (
    <div className="p-4 bg-blue-50 rounded-3xl">
      <h1 className="mb-4 text-4xl text-gray-700 font-bold tracking-widest ml-4 flex">
        <div className="mr-2 flex items-center">
          <ChevronIcon />
        </div>
        Carrier
      </h1>
      <ul>
        {CareerContents.map((cc, index) => (
          <li key={index} className="list-none">
            <ResumeBar
              date={cc.date}
              title={cc.title}
              body={cc.body}
              incHref={cc.incHref}
              isLast={index === CareerContents.length - 1}
              isPreset={cc.isPresent}
              isFirst={index === 0}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
