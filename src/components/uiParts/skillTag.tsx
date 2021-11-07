import React from 'react'

type Props = {
  name: string
  link?: string
}

/**
 * SkillTag
 * @param props.name 名前
 * @param props.link リンク
 */

export const SkillTag: React.VFC<Props> = (props) => {
  const { name, link } = props
  const className = link ? 'hover:bg-blue-500 hover:opacity-100' : ''
  return (
    <a
      href={link}
      className={`rounded-full text-white
            bg-blue-400 ${className} duration-300
            text-xs font-bold
            mr-1 md:mr-2 mb-4 px-2 md:px-4 py-2
            opacity-90`}
    >
      {name}
    </a>
  )
}
