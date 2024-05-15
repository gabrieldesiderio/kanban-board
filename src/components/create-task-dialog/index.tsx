import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import schema, { FormProps } from '@/components/create-task-dialog/validator'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { BoardContent } from '@/context/board-content'

import { Switch } from '../ui/switch'
import { Textarea } from '../ui/textarea'

export function CreateTaskDialog() {
  const { createTask } = useContext(BoardContent)

  const [open, setOpen] = useState(false)

  function handleToggleVisibility() {
    setOpen((prev) => !prev)
  }

  const form = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  const { handleSubmit, reset } = form

  function onSubmit(values: FormProps) {
    try {
      createTask(values)
      reset()
      handleToggleVisibility()
    } catch (e) {
      console.error(e)

      if (e instanceof Error) {
        toast.error('Error', {
          description: e.message,
        })
      } else {
        toast.error('An unexpected error occurred')
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Button onClick={handleToggleVisibility}>New Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new task</DialogTitle>
          <DialogDescription>
            Fill in the fields to create a new task
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="flag"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Flagged?</FormLabel>
                    <FormDescription>
                      If enabled, the card will be highlighted
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex w-full items-center justify-end gap-3">
              <Button type="submit">Create task</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
