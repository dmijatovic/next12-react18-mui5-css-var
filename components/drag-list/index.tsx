
import { useState,DragEvent } from 'react';
import List from '@mui/material/List';
import DragableItem from './DragableItem'

import {items} from './test_data'
import { sortOnNumProp } from '~/utils/sortFn';

export default function DragList() {
  const [list, setList] = useState(items)
  const [source, setSource] = useState<number | null>(null)
  const [target, setTarget] = useState<number | null>(null)

  function swapItems() {
    if (
      source !== target &&
      source !== null &&
      target !== null
    ) {
      // e.preventDefault()
      console.log("swapItems...", source,target)
      const newList = list.map((item,pos) => {
        if (pos === source) {
          item.pos = target
          return item
        }
        if (pos === target) {
          item.pos = source
          return item
        }
        item.pos = pos
        return item
      }).sort((a, b) => sortOnNumProp(a, b, "pos"))
      // debugger
      setList(newList)
    }
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    >
      {list.map((item,pos) => {
        return (
          <DragableItem
            key={pos}
            pos={pos}
            primary={item.primary}
            secondary={item.secondary}
            target={target}
            setDragSource={setSource}
            setDragTarget={setTarget}
            swapItems={swapItems}
          />
        )
      })}
    </List>
  )
}