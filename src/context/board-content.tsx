import { createContext, ReactNode, useState } from 'react'

import { Column } from '@/types/column'
import { Task } from '@/types/task'

interface OverviewData {
  title: string
  color: string
  amount: number
  percent: number
}

type BoardContentType = {
  columns: Column[]
  tasks: Task[][]
  totalTasks: number
  overview: OverviewData[]
  setTasks: (tasks: Task[][]) => void
  createColumn: (column: Column) => void
  createTask: (task: Task) => void
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
        title: 'My first task',
        description: 'Description for the first task',
        flag: false,
      },
    ],
  ])

  const totalTasks = tasks.flat().length ?? 0

  const overview = columns.map((column, index) => {
    const amount = tasks[index]?.length ?? 0

    return {
      title: column.title,
      color: column.color,
      amount: tasks[index]?.length ?? 0,
      percent: amount ? amount / totalTasks : 0,
    }
  })

  function createColumn(column: Column) {
    setColumns((prev) => [...prev, column])
  }

  function createTask({ title, description, flag = false }: Task) {
    if (!title || !description) {
      return
    }

    const cloneTasks = [...tasks]

    const uniqueArray = cloneTasks.flat()
    const taskAlreadyExists = uniqueArray.find((task) => task.title === title)

    if (taskAlreadyExists) {
      throw new Error('A task with the same title already exists')
    } else {
      cloneTasks[0].push({ title, description, flag })

      setTasks([...cloneTasks])
    }
  }

  return (
    <BoardContent.Provider
      value={{
        columns,
        tasks,
        totalTasks,
        overview,
        setTasks,
        createColumn,
        createTask,
      }}
    >
      {children}
    </BoardContent.Provider>
  )
}
