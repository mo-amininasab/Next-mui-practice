import React, { useState } from 'react';

import { NextPage } from 'next';

import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  // makeStyles,
} from '@mui/material';
import { Save, Delete } from '@mui/icons-material';

// const useStyle = makeStyles({
//   root: {
//     background: 'linear-gradient(34deb, #333, #999)',
//     border: 0,
//     borderRadius: 15,
//     color: 'white',
//     padding: '0 30px',
//   },
// });

interface Props {}

const HomePage: NextPage<Props> = () => {
  // const classes = useStyle();

  const [check, setCheck] = useState(false);
  return (
    <div>
      <Button
        variant="contained"
        color="info"
        size="small"
        startIcon={<Save />}
        sx={{
          background: 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
          border: 0,
          borderRadius: 15,
          color: 'white',
          padding: '5px 30px',
        }}
      >
        Styled Button
      </Button>

      <ButtonGroup>
        <Button variant="contained" startIcon={<Save />}>
          Save
        </Button>
        <Button variant="contained" startIcon={<Delete />} color="error">
          Discard
        </Button>
      </ButtonGroup>

      <FormControlLabel
        control={
          <Checkbox
            checked={check}
            onChange={() => {
              setCheck((prevState) => !prevState);
            }}
          />
        }
        label="Testing Checkbox"
      />

      <TextField
        variant="filled"
        type="email"
        label="The Date"
        value="test@test.com"
      />
    </div>
  );
};

export default HomePage;
