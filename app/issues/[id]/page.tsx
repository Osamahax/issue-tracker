import IssueStatusBadge from "@/components/ui/IssueStatusBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import prisma from "@/prisma/client";
import delay from "delay";
import { notFound } from "next/navigation";
import ReactMartdown from "react-markdown";
import { RxPencil2 } from "react-icons/rx"
import Link from "next/link";

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

  await delay(1000);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
      <div>
        <Button className="bg-violet-600 hover:bg-violet-700 gap-2"><RxPencil2 /><Link href={`/issue/${issue.id}/edit`}>Edit Issue</Link></Button>
      </div>
    </div>
  );
};

export default IssueDetailPage;
