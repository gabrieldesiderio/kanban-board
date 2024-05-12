import { useContext } from 'react'

import { BoardContent } from '@/context/board-content'

import { Column } from '../column'

export default function Board() {
  const { columns } = useContext(BoardContent)

  return (
    <div className="flex h-full flex-1 gap-4 overflow-auto">
      {columns.map((column) => (
        <Column key={column.title} column={column} />
      ))}
    </div>
  )
}
