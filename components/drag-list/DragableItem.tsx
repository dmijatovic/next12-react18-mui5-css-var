import { ReactNode } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useDrag } from 'react-dnd'
/**
 * see example
 * https://github.com/react-dnd/react-dnd/blob/main/packages/examples/src/04-sortable/cancel-on-drop-outside/Card.tsx
 */

type DragableItemProps = {
  pos: number
  primary: ReactNode
  secondary: ReactNode
}

export default function DragableItem({ pos, primary, secondary }: DragableItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'LIST_ITEM',
    item: {id:pos},
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
  return (
    <ListItem
      ref={drag}
      sx={{
        backgroundColor: isDragging ? '#ccc' : 'fff'
      }}
    >
      <ListItemAvatar>
        {pos + 1}
      </ListItemAvatar>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  )
}