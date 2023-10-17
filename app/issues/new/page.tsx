'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form"
import axios from "axios";
import { useRouter } from "next/navigation";

interface issueForm {
  title:string,
  description:string
}
const newIssuePage = () => {
  const router = useRouter()
  const { register, control, handleSubmit } = useForm<issueForm>();
  return (
    <form 
      className="max-w-xl space-y-3" 
      onSubmit={handleSubmit(async (data) => { 
        await axios.post('/api/issues',data)
        router.push('/issues');
      }
      )}>

      <Input placeholder="Title" {...register('title')} />
      <Controller
        name="description"
        control={control}
        render={({field}) => <SimpleMDE placeholder="Description" {...field} />}
      />
      <Button className="bg-violet-600 hover:bg-violet-800">Submit New Issue</Button>
    </form>
  )
}

export default newIssuePage