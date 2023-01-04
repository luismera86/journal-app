import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../view'
import { Typography } from '@mui/material'

const drawerWidth = 240

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
    </JournalLayout>
  )
}
