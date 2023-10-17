'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const newIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <Input placeholder="Title" />
      <Textarea placeholder="Description" />
      <Button className="bg-violet-600 hover:bg-violet-800">Submit New Issue</Button>
    </div>
  )
}

export default newIssuePage