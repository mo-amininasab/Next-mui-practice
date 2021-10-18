import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { Container, Grid, Paper } from '@mui/material';

type Note = {
  title: string;
  details: string;
  category: string;
  id: number;
};

interface Props {}

const HomePage: NextPage<Props> = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setNotes(data.notes));
  }, []);

  return (
    <Container>
      <Grid container>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} lg={4}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
