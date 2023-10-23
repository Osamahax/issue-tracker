import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IssueStatusBadge from "@/components/ui/IssueStatusBadge";
import delay from "delay";
const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);
  return (
    <div>
      <div className="mb-5">
        <Button className="bg-violet-600 hover:bg-violet-800" variant="default">
          <Link href={"/issues/new"}>New Issue</Link>
        </Button>
      </div>
      <Table className="border">
        <TableCaption>A list of your recent issues.</TableCaption>
        <TableHeader className="bg-gray-200/80">
          <TableRow>
            <TableHead>Issue</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>CreatedAt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell>
                <Link href={`/issues/${issue.id}`} className="text-violet-600 border-violet-600 hover:border-dotted hover:border-b">{issue.title}</Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default IssuesPage;
