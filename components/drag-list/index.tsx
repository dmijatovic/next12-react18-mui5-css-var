
import { useState } from 'react';
import List from '@mui/material/List';
import { useDrop } from 'react-dnd'

import DragableItem from './DragableItem'
import {items} from './test_data'
import { sortOnNumProp } from '~/utils/sortFn';

export default function DragList() {
  const [list, setList] = useState(items)
  const [source, setSource] = useState<number | null>(null)
  const [target, setTarget] = useState<number | null>(null)
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'LIST_ITEM',
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

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
          />
        )
      })}
    </List>
  )
}