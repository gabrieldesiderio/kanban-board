import { useContext } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { BoardContent } from '@/context/board-content'

import { Button } from '../ui/button'

export function AddTaskModal() {
  const { createTask } = useContext(BoardContent)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          <Button onClick={() => createTask('Title', 'Description')}>
            Add new task
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
