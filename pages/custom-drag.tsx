import PageContent from "~/components/layout/PageContent";

import DragList from '~/components/drag-list'

export default function DragPage() {
  return (
    <PageContent
      sx={{
        flex:1
      }}
    >
      <h1>This is custom draggable</h1>
      <DragList />
    </PageContent>
  )
}