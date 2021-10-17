import { NextPage } from 'next';
import { Typography } from '@mui/material';

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
    </div>
  );
};

export default CreatePage;
