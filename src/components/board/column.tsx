import { animations, multiDrag, selections } from '@formkit/drag-and-drop'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { BackpackIcon } from 'lucide-react'

import { Task } from '@/types/task'

import { TaskCard } from './task-card'

interface ColumnProps {
  title: string
  tasks: Task[]
}

export function Column({ title, tasks }: ColumnProps) {
  const [parent, taskList] = useDragAndDrop<HTMLDivElement, Task>(tasks, {
    group: `general`,
    plugins: [
      animations(),
      multiDrag({
        plugins: [
          selections({
            selectedClass: 'bg-muted',
          }),
        ],
      }),
    ],
  })

  return (
    <div className="h-full">
      <h2 className="mb-4 flex items-center text-sm font-medium text-muted-foreground">
        <BackpackIcon className="mr-2 h-4 w-4" />
        {title}
      </h2>
      <div ref={parent} className="h-full">
        {taskList.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
