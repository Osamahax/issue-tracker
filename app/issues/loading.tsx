import IssueStatusBadge from '@/components/ui/IssueStatusBadge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingIssuesPage = () => {
  const issues = [1,2,3,4,5]
  return (
    <div>
      <div className="mb-5">
      <Skeleton width="5rem" height={30} />
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
            <TableRow key={issue}>
              <TableCell>
              <Skeleton />
                <div className="block md:hidden">
                <Skeleton />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
              <Skeleton />
              </TableCell>
              <TableCell className="hidden md:table-cell">
              <Skeleton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default LoadingIssuesPage