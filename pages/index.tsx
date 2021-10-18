import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { Container, Grid, Paper } from '@mui/material';
import NoteCard from '../components/NoteCard';

type Note = {
  title: string;
  details: string;
  category: string;
  id: string;
};

interface Props {}

const HomePage: NextPage<Props> = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setNotes(data.notes));
  }, []);

  const deleteHandler = async (id: string) => {
    await fetch(`/api/data/${id}`, {
      method: 'DELETE',
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} lg={4}>
            <NoteCard note={note} onDelete={deleteHandler} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
