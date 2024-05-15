import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Droppable } from '@hello-pangea/dnd'
import { useState } from 'react'

import { Column as ColumnType } from '@/types/column'
import { Task as TaskType } from '@/types/task'

import { Task } from '../task'
import { ColumnHeader } from './column-header'
import { ColumnTitle } from './column-title'

interface ColumnProps {
  index: number
  column: ColumnType
  tasks: TaskType[]
}

export function Column({ column, index, tasks }: ColumnProps) {
  const [expanded, setExpanded] = useState(true)

  const [animationContentParent] = useAutoAnimate()

  return (
    <div>
      <div
        className="h-full w-fit data-[expanded=true]:w-80"
        data-expanded={expanded}
      >
        <ColumnHeader
          column={column}
          expanded={expanded}
          setExpanded={setExpanded}
          tasksAmount={tasks?.length}
        />
        <div className="h-[calc(100%-56px)]" ref={animationContentParent}>
          {expanded ? (
            <Droppable key={`column-${index}`} droppableId={`${index}`}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  data-dragging-over={snapshot.isDraggingOver}
                  {...provided.droppableProps}
                  className="h-full space-y-3 rounded-md p-1 data-[dragging-over=true]:border data-[dragging-over=true]:border-dashed"
                >
                  {tasks?.map((task, taskIndex) => (
                    <Task key={task.title} task={task} index={taskIndex} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ) : (
            <div className="flex h-full w-10 flex-1 rounded-md bg-secondary">
              <ColumnTitle
                column={column}
                className="mt-3 w-full"
                style={{ writingMode: 'vertical-rl' }}
                tasksAmount={tasks?.length}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
