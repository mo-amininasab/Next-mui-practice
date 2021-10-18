import React from 'react';
import { useRouter } from 'next/router';

import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';

interface Props {}

const SideDrawer: React.FC<Props> = (props) => {
  const router = useRouter();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined />,
      color: 'secondary',
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlined />,
      color: 'secondary',
      path: '/create',
    },
  ];

  return (
    <Drawer
      style={{ width: drawerWidth }}
      variant="permanent"
      anchor="left"
      sx={classes.drawerPaper}
    >
      <div>
        <Typography variant="h5">Ninja Notes</Typography>
      </div>

      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => {
              router.push(item.path);
            }}
            sx={router.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const drawerWidth = 240;

const classes = {
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    background: '#f4f4f4',
  },
};

export default SideDrawer;
