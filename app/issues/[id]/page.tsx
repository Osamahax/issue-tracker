import IssueStatusBadge from "@/components/ui/IssueStatusBadge";
import { Card } from "@/components/ui/card";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ReactMartdown from "react-markdown";
interface Props {
  params: {
    id: string;
  };
}
const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  return (
    <div>
      <h1>{issue.title}</h1>
      <div className="flex gap-3 my-2">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Card className="prose mt-4">
        <ReactMartdown>{issue.description}</ReactMartdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
