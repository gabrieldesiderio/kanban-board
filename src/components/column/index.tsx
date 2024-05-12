import { useAutoAnimate } from '@formkit/auto-animate/react'
import { animations, multiDrag, selections } from '@formkit/drag-and-drop'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { useContext, useState } from 'react'

import { BoardContent } from '@/context/board-content'
import { Column as ColumnType } from '@/types/column'
import { Task } from '@/types/task'

import { TaskCard } from '../board/task-card'
import { ColumnHeader } from './column-header'
import { ColumnTitle } from './column-title'

interface ColumnProps {
  column: ColumnType
}

export function Column({ column }: ColumnProps) {
  const [expanded, setExpanded] = useState(true)

  const [animationParent] = useAutoAnimate()
  const [animationContentParent] = useAutoAnimate()

  const { tasks } = useContext(BoardContent)

  const filteredTasks = tasks.filter((task) => task.status === column.title)

  const [parent, taskList] = useDragAndDrop<HTMLDivElement, Task>(
    filteredTasks,
    {
      group: `board`,
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
    },
  )

  return (
    <div
      className="w-fit data-[expanded=true]:w-80"
      data-expanded={expanded}
      ref={animationParent}
    >
      <ColumnHeader
        column={column}
        expanded={expanded}
        setExpanded={setExpanded}
        tasksAmount={taskList.length}
      />
      <div className="h-[calc(100%-56px)]" ref={animationContentParent}>
        {expanded ? (
          <div ref={parent} className="h-full space-y-3 p-1">
            {taskList.map((task) => (
              <TaskCard key={task.title} task={task} />
            ))}
          </div>
        ) : (
          <div className="flex h-full w-10 flex-1 rounded-md bg-secondary">
            <ColumnTitle
              column={column}
              className="mt-3 w-full"
              style={{ writingMode: 'vertical-rl' }}
              tasksAmount={taskList.length}
            />
          </div>
        )}
      </div>
    </div>
  )
}
