import {DragEvent, ReactNode, useRef, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

type DragableItemProps = {
  pos: number
  primary: ReactNode
  secondary: ReactNode
  setDragSource: (source: number | null) => void
  setDragTarget: (target: number | null) => void
  swapItems: () => void
  target: number | null
  // onSwap: (target: number)=>void
}

export default function DragableItem({pos, primary, secondary, target, setDragSource, setDragTarget, swapItems}: DragableItemProps) {
  // const [dragging, setDragging]=useState(false)

  function handleDragStart(e:DragEvent<HTMLLIElement>) {
    // console.log("handle drag start...", pos)
    // console.log("element...", e)
    // save position of dragged item
    setTimeout(() => {
      // setDragging(true)
      setDragSource(pos)
    },0)
  }

  function handleDragEnd() {
    // setDragging(false)
    setDragSource(null)
    // setDragTarget(null)
    swapItems()
  }

  function handleDragEnter() {
    setDragTarget(pos)
  }

  return (
    <ListItem
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
      sx={{
        backgroundColor: target===pos ? '#ccc' : '#fff'
      }}
    >
      <ListItemAvatar>
        {pos + 1}
      </ListItemAvatar>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  )
}