import { createContext, ReactNode, useState } from 'react'

import { Column } from '@/types/column'
import { Task } from '@/types/task'

type BoardContentType = {
  columns: Column[]
  tasks: Task[][]
  setTasks: (tasks: Task[][]) => void
  createColumn: (column: Column) => void
  createTask: (title: string, description: string) => void
}

export const BoardContent = createContext({} as BoardContentType)

export function BoardProvider({ children }: { children: ReactNode }) {
  const [columns, setColumns] = useState<Column[]>([
    {
      title: 'Backlog',
      color: '#7c3aed',
    },
    {
      title: 'To Do',
      color: '#2563eb',
    },
    {
      title: 'In Progress',
      color: '#22c55e',
    },
    {
      title: 'Testing',
      color: '#f43f5e',
    },
    {
      title: 'Done',
      color: '#22d3ee',
    },
  ])

  const [tasks, setTasks] = useState<Task[][]>([
    [
      {
        title: 'Task 1',
        description: 'Description for task 1',
      },
    ],
    [
      {
        title: 'Task 2',
        description: 'Description for task 2',
      },
    ],
  ])

  function createColumn(column: Column) {
    setColumns((prev) => [...prev, column])
  }

  function createTask(title: string, description: string) {
    if (!title || !description) {
      return
    }

    const cloneTasks = [...tasks]
    cloneTasks[0].push({ title, description })

    setTasks([...cloneTasks])
  }

  return (
    <BoardContent.Provider
      value={{ columns, tasks, setTasks, createColumn, createTask }}
    >
      {children}
    </BoardContent.Provider>
  )
}
