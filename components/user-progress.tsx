import React from 'react'

type Props = {
    activeCourse: any
    hearts: number
    points: number
    hasActiveSubscription: boolean
}

function UserProgress({ activeCourse, hearts, points, hasActiveSubscription}: Props) {
  return (
    <div>UserProgress</div>
  )
}

export default UserProgress