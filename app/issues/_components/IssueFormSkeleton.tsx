import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const IssueFormSkeleton = () => {
  return (
    <div className="max-w-xl">
      <Skeleton height={30}/>
      <div className="prose my-8">
        <Skeleton height={290} />
      </div>
        <Skeleton height={30} width="5rem" />
    </div>
  )
}

export default IssueFormSkeleton