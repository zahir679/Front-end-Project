import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({updateHalalFilter}) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} onChange={updateHalalFilter} label="Halal" />
      <FormControlLabel control={<Checkbox />} label="Vegetarian" />
      <FormControlLabel control={<Checkbox />} label="Gluten Free" />
    </FormGroup>
  );


  
}
