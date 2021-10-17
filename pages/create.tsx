import { NextPage } from 'next';
import { Typography, Button, ButtonGroup } from '@mui/material';

interface Props {}

const CreatePage: NextPage<Props> = () => {
  return (
    <div>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => {}}
      >
        Submit
      </Button>
    </div>
  );
};

export default CreatePage;
