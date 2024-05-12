import { createContext, ReactNode, useState } from 'react'

import { Column } from '@/types/column'
import { Task } from '@/types/task'

type BoardContentType = {
  columns: Column[]
  tasks: Task[]
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

  const [tasks, setTasks] = useState<Task[]>([
    {
      title: 'Task 1',
      description: 'Description task 1',
      status: 'Backlog',
    },
    {
      title: 'Task 2',
      description: 'Description task 2',
      status: 'Backlog',
    },
    {
      title: 'Task 3',
      description: 'Description task 3',
      status: 'Backlog',
    },
    {
      title: 'Task 4',
      description: 'Description task 4',
      status: 'Backlog',
    },
    {
      title: 'Task 5',
      description: 'Description task 5',
      status: 'Backlog',
    },
    {
      title: 'Task 6',
      description: 'Description task 6',
      status: 'Backlog',
    },
    {
      title: 'Task 7',
      description: 'Description task 7',
      status: 'Backlog',
    },
    {
      title: 'Task 8',
      description: 'Description task 8',
      status: 'Backlog',
    },
    {
      title: 'Task 9',
      description: 'Description task 9',
      status: 'Backlog',
    },
    {
      title: 'Task 10',
      description: 'Description task 10',
      status: 'Backlog',
    },
    {
      title: 'Task 11',
      description: 'Description task 11',
      status: 'Backlog',
    },
    {
      title: 'Task 12',
      description: 'Description task 12',
      status: 'Backlog',
    },
    {
      title: 'Task 13',
      description: 'Description task 13',
      status: 'Backlog',
    },
    {
      title: 'Task 14',
      description: 'Description task 14',
      status: 'Backlog',
    },
    {
      title: 'Task 15',
      description: 'Description task 15',
      status: 'Backlog',
    },
    {
      title: 'Task 16',
      description: 'Description task 16',
      status: 'Backlog',
    },
    {
      title: 'Task 17',
      description: 'Description task 17',
      status: 'Backlog',
    },
  ])

  function createColumn(column: Column) {
    setColumns((prev) => [...prev, column])
  }

  function createTask(task: Task) {
    setTasks((prev) => [...prev, task])
  }

  return (
    <BoardContent.Provider value={{ columns, tasks, createColumn, createTask }}>
      {children}
    </BoardContent.Provider>
  )
}
