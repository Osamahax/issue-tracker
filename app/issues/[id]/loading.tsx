import IssueStatusBadge from "@/components/ui/IssueStatusBadge";
import { Card } from "@/components/ui/card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueDetailLoading = () => {
  return (
    <div className="max-w-xl">
      <Skeleton />
      <div className="flex gap-3 my-2">
        <Skeleton width="5rem" />
        <Skeleton width="5rem" />
      </div>
      <Card className="prose mt-4">
        <Skeleton count={8} />
      </Card>
    </div>
  );
};

export default IssueDetailLoading;
