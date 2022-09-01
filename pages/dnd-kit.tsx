import PageContent from "~/components/layout/PageContent";

import SortableList from '~/components/dnd-kit/SortableList'

export default function DndKit(){
  return (
  <PageContent
    sx={{
      flex:1
    }}
  >
    <h1>DND Kit Sortable</h1>
    <SortableList />
  </PageContent>
  )
}