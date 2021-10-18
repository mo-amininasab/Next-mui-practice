import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

type Note = {
  title: string;
  details: string;
  category: string;
  id: string;
};

interface Props {
  note: Note;
  onDelete: (id: string) => Promise<void>;
}

const NoteCard: React.FC<Props> = ({ note, onDelete }) => {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={() => onDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
