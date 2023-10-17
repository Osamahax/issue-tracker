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

interface issueForm {
  title: string;
  description: string;
}
const newIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<issueForm>();
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
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button className="bg-violet-600 hover:bg-violet-800">
          Submit New Issue
        </Button>
      </form>
    </div>
  );
};

export default newIssuePage;
