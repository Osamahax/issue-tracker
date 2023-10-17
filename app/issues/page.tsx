import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const IssuesPage = () => {
  return (
    <div><Button className='bg-violet-600 hover:bg-violet-800' variant="default"><Link href={"/issues/new"}>New Issue</Link></Button>
    </div>
  )
}

export default IssuesPage