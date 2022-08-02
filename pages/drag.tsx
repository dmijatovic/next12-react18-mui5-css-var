import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import PageContent from "~/components/layout/PageContent";
import DragList from '~/components/drag-list'

export default function DragPage() {
  return (
    <PageContent
      sx={{
        flex:1
      }}
    >
      <h1>This is DND draggable</h1>
      <DndProvider backend={HTML5Backend}>
        <DragList />
      </DndProvider>
    </PageContent>
  )
}