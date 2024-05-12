import './global.css'

import Board from './components/board'
import { Header } from './components/header'
import { ThemeProvider } from './components/theme-provider'

export function App() {
  return (
    <ThemeProvider>
      <div className="flex h-screen flex-col bg-background antialiased">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <Board />
        </main>
      </div>
    </ThemeProvider>
  )
}
