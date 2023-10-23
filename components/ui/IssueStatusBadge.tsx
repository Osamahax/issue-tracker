import React from 'react'
import { Status, Issue } from '@prisma/client'
import { Badge } from './badge'

const statusMap: Record<Status, {lable:string, color:'red' | 'violet' | 'green' }> = {
    OPEN:{lable:'Open', color:'red'},
    IN_PROGRESS:{lable:'In Progress', color:'violet'},
    CLOSED:{lable:'Closed', color:'green'}
};
const IssueStatusBadge = ({status}:{status:Status}) => {
  return (
    <Badge variant={statusMap[status].color}>
        {statusMap[status].lable}
    </Badge>
  )
}

export default IssueStatusBadge