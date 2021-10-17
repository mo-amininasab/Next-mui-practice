import { NextPage } from 'next';
import { Typography, Button, Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
interface Props {}

const CreatePage: NextPage<Props> = () => {
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

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        onClick={() => {}}
      >
        Submit
      </Button>
    </Container>
  );
};

export default CreatePage;
