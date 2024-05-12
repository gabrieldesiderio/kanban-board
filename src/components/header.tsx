import { SquareKanban } from 'lucide-react'

import { ThemeModeToggle } from './theme-mode-toggle'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="flex h-[60px] items-center justify-between border-b px-4">
      <ThemeModeToggle />
      <h1 className="text-md flex items-center font-medium">
        <SquareKanban className="mr-2 h-4 w-4" />
        Kanban Board
      </h1>
      <Button>Create task</Button>
    </header>
  )
}
