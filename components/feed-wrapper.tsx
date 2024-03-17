import React from 'react'
type Props = {
    children: React.ReactNode
}

function FeedWrapper({ children }: Props) {
  return (
    <div className='flex-1 realtive top-0 pb-10'>{ children }</div>
  )
}

export default FeedWrapper