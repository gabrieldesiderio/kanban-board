import { Flag } from 'lucide-react'

import { Task } from '@/types/task'

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div
      className="relative mb-3 rounded-lg border bg-background p-3 pr-8 shadow-sm transition-all data-[flagged=true]:border-destructive"
      data-flagged={task.flag}
    >
      {task.flag && (
        <Flag className="absolute right-3 top-3 h-4 w-4 fill-destructive text-destructive" />
      )}
      <h3 className="mb-1 text-sm font-medium">{task.title}</h3>
      <p className="text-xs text-muted-foreground">{task.description}</p>
    </div>
  )
}
