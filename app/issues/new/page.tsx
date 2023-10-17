"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod"

type IssueForm = z.infer<typeof createIssueSchema>
const newIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, control, handleSubmit, formState:{ errors } } = useForm<IssueForm>({
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
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An Unexpected Error occured.");
          }
        })}
      >
        <Input placeholder="Title" {...register("title")} />
        {errors.title && <p className="text-red-600">{errors.title.message}</p>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && <p className="text-red-600">{errors.description.message}</p>}
        <Button className="bg-violet-600 hover:bg-violet-800">
          Submit New Issue
        </Button>
      </form>
    </div>
  );
};

export default newIssuePage;
