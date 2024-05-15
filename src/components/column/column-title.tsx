import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { Column } from '@/types/column'

interface ColumnTitleProps extends ComponentProps<'div'> {
  column: Column
  tasksAmount: number
}

export function ColumnTitle({
  column,
  tasksAmount,
  className,
  ...props
}: ColumnTitleProps) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: column.color }}
      />
      <h2 className="whitespace-nowrap text-sm font-medium">{column.title}</h2>
      <p className="text-xs text-muted-foreground">{tasksAmount ?? 0}</p>
    </div>
  )
}
