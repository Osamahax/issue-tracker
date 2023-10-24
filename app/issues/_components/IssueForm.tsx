"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod"
import Spinner from "@/components/ui/Spinner";
import { Issue } from "@prisma/client";
import dynamic from "next/dynamic";

// const SimpleMDE = dynamic(()=> import('react-simplemde-editor'),{ssr:false})
type IssueFormData = z.infer<typeof createIssueSchema>
const IssueForm = ({ issue }: {issue?:Issue}) => {
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false)
  const router = useRouter();
  const { register, control, handleSubmit, formState:{ errors } } = useForm<IssueFormData>({
    resolver:zodResolver(createIssueSchema)
  });
  return (
    <div className="max-w-xl">
      {error && (<Alert className="mb-4 bg-red-50">
        {/* <Terminal className="h-4 w-4" /> */}
        <AlertTitle className="text-red-600">ERROR!!!!</AlertTitle>
        <AlertDescription>
          {error}
        </AlertDescription>
      </Alert>)}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmitting(true);
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setSubmitting(false)
            setError("An Unexpected Error occured.");
          }
        })}
      >
        <Input placeholder="Title" defaultValue={issue?.title} {...register("title")} />
        {errors.title && <p className="text-red-600">{errors.title.message}</p>}
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && <p className="text-red-600">{errors.description.message}</p>}
        <Button disabled={isSubmitting} className="bg-violet-600 hover:bg-violet-800">
          Submit New Issue {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
