import React from 'react'

export const ChevronIcon: React.VFC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-chevron-right"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  )
}
