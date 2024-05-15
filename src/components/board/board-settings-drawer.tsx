import { SlidersHorizontal } from 'lucide-react'
import { useContext } from 'react'
import { Cell, Pie, PieChart } from 'recharts'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { BoardContent } from '@/context/board-content'

export function BoardSettingsDrawer() {
  const { overview, totalTasks } = useContext(BoardContent)

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="h-10 w-10 p-0">
          <SlidersHorizontal className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-center">Overview</DrawerTitle>
          </DrawerHeader>
          <div className="flex items-center justify-center">
            <PieChart width={384} height={192}>
              <Pie
                data={overview}
                cx="50%"
                cy="70%"
                startAngle={180}
                endAngle={0}
                innerRadius={80}
                outerRadius={100}
                paddingAngle={5}
                dataKey="amount"
                label
              >
                {overview.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="-my-16 flex items-center justify-center space-x-2 pb-32">
            <div className="flex-1 text-center">
              <div className="text-7xl font-bold tracking-tighter">
                {totalTasks}
              </div>
              <div className="text-[0.70rem] uppercase text-muted-foreground">
                Tasks
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
