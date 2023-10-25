"use client";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "@/components/ui/Spinner";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const rounter = useRouter();
  const [error, setError] = useState(false)
  const [isDeleting, setDeleting]=useState(false)
  const deleteIssue = async () => {
    try {
      setDeleting(true);
      await axios.delete("/api/issues/" + issueId);
      rounter.push("/issues");
      rounter.refresh();
    } catch (error) {
      setDeleting(false);
      setError(true)
    }
  } 
  return (
    <>
    <AlertDialog>
      <AlertDialogTrigger disabled={isDeleting}>
        <Button variant="destructive" className="w-full" disabled={isDeleting}>
          Delete Issue
          {isDeleting && <Spinner/>}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the issue
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={deleteIssue}
          >
            Delete Issue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    <AlertDialog open={error}>
      <AlertDialogContent>
        <AlertDialogTitle>Error</AlertDialogTitle>
        <AlertDialogDescription>This issue could not be deleted.</AlertDialogDescription>
        <Button variant="secondary" onClick={()=>setError(false)}>Ok</Button>
      </AlertDialogContent>
    </AlertDialog>
    </>
  );
};

export default DeleteIssueButton;
