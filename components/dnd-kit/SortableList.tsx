
import { useState } from 'react'
import {DndContext, DragEndEvent, useSensors, useSensor, TouchSensor, MouseSensor} from '@dnd-kit/core'
import {SortableContext, arrayMove, verticalListSortingStrategy} from '@dnd-kit/sortable'
import List from '@mui/material/List'

import SortableItem,{sortableListItem} from './SortableItem'
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers'

const listData:sortableListItem[]=[
  {position:1, id:'111',label:'Item 1', data:{primary:'This is primary text of 1', secondary:"The secondary text of 1"}},
  {position:2, id:'222',label:'Item 2', data:{primary:'This is primary text of 2', secondary:"The secondary text of 2"}},
  {position:3, id:'333',label:'Item 3', data:{primary:'This is primary text of 3', secondary:"The secondary text of 3"}}
]

export default function SortableList(){
  // const [ids,setIds]=useState(initialOrder)
  const [items,setItems]=useState(listData)

  const sensors = useSensors(
    useSensor(TouchSensor),
    useSensor(MouseSensor)
  )

  function handleDragEnd(e:DragEndEvent){
    const {active,over} = e
    if (over && active.id!==over?.id){
      console.group("handleDragOver")
      console.log("active...", active)
      console.log("over...", over)
      console.log("items...", items)
      const oldIndex = items.findIndex(item => item.id === active.id)
      const newIndex = items.findIndex(item => item.id === over.id)
      const newItems = arrayMove(items,oldIndex,newIndex).map((item,pos)=>{
        return {
          ...item,
          position:pos
        }
      })
      console.log("newItems...", newItems)
      console.groupEnd()
      // debugger
      setItems(newItems)
    }
  }

  return (
    <>
    <h2>Sortable list</h2>
    <DndContext
      // id is required in SSR mode
      // see https://github.com/clauderic/dnd-kit/issues/285
      id="sortable-list"
      onDragEnd={handleDragEnd}
      sensors={sensors}
      modifiers={[restrictToVerticalAxis,restrictToParentElement]}
    >
      <SortableContext
        items={items.map(item=>({id: item.id}))}
        strategy={verticalListSortingStrategy}
      >
        <List>
          {items.map(item=>{
            return <SortableItem key={item.id} {...item} />
          })}
        </List>
      </SortableContext>
    </DndContext>
    </>
  )
}