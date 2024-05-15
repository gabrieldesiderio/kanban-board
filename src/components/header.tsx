import { SquareKanban } from 'lucide-react'

import { BoardSettingsDrawer } from './board/board-settings-drawer'
import { CreateTaskDialog } from './create-task-dialog'
import { ThemeModeToggle } from './theme-mode-toggle'

export function Header() {
  return (
    <header className="flex h-[60px] items-center justify-between border-b px-4">
      <ThemeModeToggle />
      <h1 className="text-md flex items-center font-medium">
        <SquareKanban className="mr-2 h-5 w-5" />
        Kanban Board
      </h1>
      <div className="flex gap-2">
        <CreateTaskDialog />
        <BoardSettingsDrawer />
      </div>
    </header>
  )
}
