import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

interface Props {
  
}

const Header: React.FC<Props> = (props) => {
  return (
    <AppBar sx={{width: `calc(100% - ${drawerWidth}px)`}} elevation={0}>
      <Toolbar>
        <Typography>
          Welcome to Ninja Notes website
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const drawerWidth = 240;

export default Header
