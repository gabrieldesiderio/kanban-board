import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from '@hello-pangea/dnd'
import { useContext } from 'react'

import { BoardContent } from '@/context/board-content'
import { Task } from '@/types/task'

import { Column } from '../column'

const reorder = (list: Task[], fromIndex: number, toIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(fromIndex, 1)
  result.splice(toIndex, 0, removed)

  return result
}

const move = (
  source: Task[],
  destination: Task[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination ?? [])
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result: Record<string, Task[]> = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

export function Board() {
  const { columns, tasks, setTasks } = useContext(BoardContent)

  function onDragEnd({ source, destination }: DropResult) {
    if (!destination) {
      return
    }

    const sInd = Number(source.droppableId)
    const dInd = Number(destination.droppableId)

    console.log(sInd, dInd)

    if (sInd === dInd) {
      const items = reorder(tasks[sInd], source.index, destination.index)
      const newTasks = [...tasks]
      newTasks[sInd] = items
      setTasks(newTasks)
    } else {
      const result = move(tasks[sInd], tasks[dInd], source, destination)
      const newTasks = [...tasks]
      newTasks[sInd] = result[sInd]
      newTasks[dInd] = result[dInd]

      setTasks(newTasks)
    }
  }

  return (
    <div className="flex h-full flex-1 gap-4 overflow-auto">
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column, index) => (
          <Column
            column={column}
            index={index}
            tasks={tasks[index]}
            key={`column-${index}`}
          />
        ))}
      </DragDropContext>
    </div>
  )
}
