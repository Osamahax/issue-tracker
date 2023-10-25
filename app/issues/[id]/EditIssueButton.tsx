import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { RxPencil2 } from "react-icons/rx";

const EditIssueButton = ({issueId}:{issueId:number}) => {
  return (
    <Button className="bg-violet-600 hover:bg-violet-700 gap-2">
      <RxPencil2 />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
