'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const newIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <Input placeholder="Title" />
      <SimpleMDE placeholder="Description" />
      <Button className="bg-violet-600 hover:bg-violet-800">Submit New Issue</Button>
    </div>
  )
}

export default newIssuePage