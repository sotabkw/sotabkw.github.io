import React from 'react'
import { ChevronIcon } from '@components/uiParts/Icon/chevron'
import { SkillTag } from '@components/uiParts/skillTag'
import { SkillContents } from '@components/util/constant/skill'

export const Skill: React.VFC = () => {
  return (
    <div className="p-4 bg-blue-50 rounded-3xl">
      <h1 className="mb-4 text-4xl text-gray-700 font-bold tracking-widest ml-4 flex">
        <div className="mr-2 flex items-center">
          <ChevronIcon />
        </div>
        Skill
      </h1>
      <ul className="mb-6 flex flex-wrap px-7 list-none">
        {SkillContents.map((s, i) => (
          <li key={i} className="list-none my-2">
            <SkillTag name={s.name} link={s.href} />
          </li>
        ))}
      </ul>
    </div>
  )
}
