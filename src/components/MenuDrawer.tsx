import * as React from "react"
import { Menu, X } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ReactNode } from "react"

interface IDrawer {
  children: ReactNode;
} 

export const MenuDrawer: React.FC<IDrawer> = ({children}) => {

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Menu/>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
            <DrawerTitle>GKJW Probolinggo</DrawerTitle>
            <DrawerClose>
              <X color="black"/>
            </DrawerClose>
          </DrawerHeader>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  )
}