import React, { useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Layout from '../components/layout/Layout';

interface Props {}

const CreatePage: NextPage<Props> = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const router = useRouter();

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title.trim() === '') {
      setTitleError(true);
    }

    if (details.trim() === '') {
      setDetailsError(true);
    }

    if (title && details) {
      fetch('/api/data', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          title,
          details,
          category,
          id: new Date(),
        }),
      }).then(() => router.push('/'));
    }
  };

  return (
    <Layout>
      <Container>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
          Create a new note
        </Typography>
        <form onSubmit={onSubmitHandler} noValidate autoComplete="off">
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              marginTop: 5,
              marginBottom: 5,
              display: 'block',
            }}
            variant="outlined"
            label="Note Title"
            color="secondary"
            required
            fullWidth
            error={titleError}
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            sx={{
              marginBottom: 5,
            }}
            variant="outlined"
            label="Details"
            multiline
            rows={4}
            color="secondary"
            required
            fullWidth
            error={detailsError}
          />
          <FormControl sx={{ display: 'block', marginBottom: 5 }}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="money"
                control={<Radio color="secondary" />}
                label="Money"
              />
              <FormControlLabel
                value="todos"
                control={<Radio color="secondary" />}
                label="Todos"
              />
              <FormControlLabel
                value="reminders"
                control={<Radio color="secondary" />}
                label="Reminders"
              />
              <FormControlLabel
                value="work"
                control={<Radio color="secondary" />}
                label="Work"
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => {}}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Layout>
  );
};

export default CreatePage;
