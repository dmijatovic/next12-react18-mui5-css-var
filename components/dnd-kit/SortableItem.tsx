import ListItem from '@mui/material/ListItem'
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image'
import ListItemText from '@mui/material/ListItemText';

export type sortableListItem={
  position: number,
  id:string,
  label:string,
  data:any
}

export default function SortableListItem(item:sortableListItem){
  const {attributes,listeners,setNodeRef,transform,transition,isDragging} = useSortable({id:item.id})

  const style={
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    backgroundColor: '#eee',
    zIndex: isDragging ? 9:0,
    cursor: isDragging ? "move" : "default"
  }

  return (
    <ListItem
      // draggable
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.data.primary} secondary={item.data.secondary} />
    </ListItem>
  )
}