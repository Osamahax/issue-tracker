import IssueStatusBadge from "@/components/ui/IssueStatusBadge";
import { Card } from "@/components/ui/card";
import { Issue } from "@prisma/client";
import ReactMartdown from "react-markdown";

const IssueDetails = ({ issue }:{ issue: Issue}) => {
  return (
    <>
      <h1>{issue.title}</h1>
      <div className="flex gap-3 my-2">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Card className="prose max-w-full mt-4">
        <ReactMartdown>{issue.description}</ReactMartdown>
      </Card>
    </>
  );
};

export default IssueDetails;
