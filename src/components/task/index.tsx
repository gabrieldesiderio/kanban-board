import { Draggable } from '@hello-pangea/dnd'

import { Task as TaskType } from '@/types/task'

import { TaskCard } from './task-card'

interface TaskCardProps {
  task: TaskType
  index: number
}

export function Task({ task, index }: TaskCardProps) {
  return (
    <Draggable
      key={`task-${task.title}`}
      draggableId={`task-${task.title}`}
      index={index}
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskCard task={task} />
        </div>
      )}
    </Draggable>
  )
}
