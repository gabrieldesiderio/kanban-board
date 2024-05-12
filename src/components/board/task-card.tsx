import { Task } from '@/types/task'

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="mb-3 rounded-lg border p-3 shadow-sm">
      <h3 className="mb-1 text-sm font-semibold">{task.title}</h3>
      <p className="text-sm">{task.description}</p>
    </div>
  )
}
