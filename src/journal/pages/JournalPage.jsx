import { NoteView, NothingSelectedView } from '../view'

import { JournalLayout } from '../layout/JournalLayout'
import { Typography } from '@mui/material'

const drawerWidth = 240

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      <NoteView />
    </JournalLayout>
  )
}
