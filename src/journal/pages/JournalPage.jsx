import { IconButton, Typography } from '@mui/material'
import { NoteView, NothingSelectedView } from '../view'

import { AddOutlined } from '@mui/icons-material'
import { JournalLayout } from '../layout/JournalLayout'

const drawerWidth = 240

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  )
}
