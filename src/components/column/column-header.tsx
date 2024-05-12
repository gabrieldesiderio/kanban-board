import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ChevronsLeftRight, ChevronsRightLeft } from 'lucide-react'

import { Column } from '@/types/column'

import { Button } from '../ui/button'
import { ColumnTitle } from './column-title'

interface ColumnHeaderProps {
  column: Column
  expanded: boolean
  tasksAmount: number
  setExpanded: (value: boolean) => void
}

export function ColumnHeader({
  column,
  expanded,
  tasksAmount,
  setExpanded,
}: ColumnHeaderProps) {
  const [columnHeaderParent] = useAutoAnimate()
  const [buttonParent] = useAutoAnimate()

  return (
    <div
      className="sticky top-0 z-10 mb-4 flex items-center justify-between rounded-md bg-secondary shadow-sm"
      ref={columnHeaderParent}
    >
      {expanded && (
        <ColumnTitle
          column={column}
          tasksAmount={tasksAmount}
          className="ml-3"
        />
      )}
      <Button
        variant="ghost"
        className="aspect-square p-0"
        ref={buttonParent}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <ChevronsRightLeft className="h-4 w-4" />
        ) : (
          <ChevronsLeftRight className="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}
