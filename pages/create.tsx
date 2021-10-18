import React, { useState } from 'react';

import { NextPage } from 'next';
import { Typography, Button, Container, TextField } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
interface Props {}

const CreatePage: NextPage<Props> = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

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
      console.log(title, details);
    }
  };

  return (
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
  );
};

export default CreatePage;
