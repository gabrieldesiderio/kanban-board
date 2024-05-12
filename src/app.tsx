import './global.css'

import Board from './components/board'
import { Header } from './components/header'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from './components/ui/sonner'
import { BoardProvider } from './context/board-content'

export function App() {
  return (
    <ThemeProvider>
      <BoardProvider>
        <main className="flex h-screen flex-col overflow-hidden bg-background antialiased">
          <Header />
          <div className="flex-1 overflow-hidden p-4">
            <Board />
          </div>
        </main>
        <Toaster />
      </BoardProvider>
    </ThemeProvider>
  )
}
