import { Task } from '@/types/task'

import { Column } from './column'

export default function Board() {
  const backlog: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Task description 1',
      status: 'backlog',
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Task description 2',
      status: 'backlog',
    },
  ]

  const todo: Task[] = [
    {
      id: '3',
      title: 'Task 3',
      description: 'This is a description for task 3.',
      status: 'todo',
    },
    {
      id: '4',
      title: 'Task 4',
      description: 'This is a description for task 4.',
      status: 'todo',
    },
  ]

  return (
    <div className="grid h-full grid-cols-4 gap-x-5">
      <Column title="Backlog" tasks={backlog} />
      <Column title="To Do" tasks={todo} />
      <Column title="In Progress" tasks={[]} />
      <Column title="Done" tasks={[]} />
      {/* <BackpackIcon className="mr-2 h-4 w-4" /> */}
      {/* <ListTodoIcon className="mr-2 h-4 w-4" /> */}
      {/* <ActivityIcon className="mr-2 h-4 w-4" /> */}
      {/* <CheckIcon className="mr-2 h-4 w-4" /> */}
      {/* <div className="w-72">
      <div className="w-72">
        <h2 className="text-muted-fo mb-4 flex items-center text-sm font-medium">
          <CheckIcon className="mr-2 h-4 w-4" />
          Done
        </h2>
        <div className="mb-4 rounded-lg border p-3 shadow-sm">
          <h3 className="mb-1 text-sm font-semibold">Task 8</h3>
          <p className="text-sm">This is a description for task 8.</p>
        </div>
        <div className="mb-4 rounded-lg border p-3 shadow-sm">
          <h3 className="mb-1 text-sm font-semibold">Task 9</h3>
          <p className="text-sm">This is a description for task 9.</p>
        </div>
      </div> */}
    </div>
  )
}
