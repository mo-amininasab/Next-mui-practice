import React, { useState } from 'react';

import { NextPage } from 'next';

import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { Save, Delete } from '@mui/icons-material';

interface Props {}

const HomePage: NextPage<Props> = () => {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <Button
        variant="contained"
        color="info"
        size="small"
        startIcon={<Save />}
      >
        I'm Button
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
