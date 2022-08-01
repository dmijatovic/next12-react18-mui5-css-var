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
  target: number | null
  swapItems:()=>void
  // onSwap: (target: number)=>void
}

export default function DragableItem({pos, primary, secondary, target, setDragSource, setDragTarget,swapItems}: DragableItemProps) {
  // const [dragging, setDragging]=useState(false)

  function handleDragStart(e:DragEvent<HTMLLIElement>) {
    console.log("handleDragStart...", pos)
    // console.log("element...", e)
    // save position of dragged item
    setDragSource(pos)
    // setTimeout(() => {
    //   // setDragging(true)
    // },0)
  }

  function handleDragEnter(e: DragEvent<HTMLLIElement>) {
    console.log("handleDragEnter...", pos)
    // e.preventDefault()
    setDragTarget(pos)
    // swapItems()
  }

  function handleDragOver(e: DragEvent<HTMLLIElement>) {
    // console.log("handleDragOver...", pos)
    // we need to prevent dragover to be able to capture drop event
    e.preventDefault()
  }

  function handleDragLeave(e: DragEvent<HTMLLIElement>) {
    console.log("handleDragLeave...", pos)
    // e.preventDefault()
    // setDragTarget(null)
  }

  function handleDrop(e: DragEvent<HTMLLIElement>) {
    console.log("handleDrop...", pos)
    swapItems()
  }

  function handleDragEnd(e: DragEvent<HTMLLIElement>) {
    console.log("handleDragEnd...", pos)
    e.preventDefault()
    // setDragging(false)
    setDragSource(null)
    setDragTarget(null)
    // swapItems()
  }

  return (
    <ListItem
      draggable
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
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