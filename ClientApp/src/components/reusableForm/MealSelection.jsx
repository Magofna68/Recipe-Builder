import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      display: 'inlineBlock',
    },
  },
};

const mealTypes = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Fourth Meal',
  'Snack',
  'Other'
];

export default function MultipleSelectCheckmarks() {
  const [mealName, setMealName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMealName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Breakfast, Lunch, Dinner...</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={mealName}
          onChange={handleChange}
          input={<OutlinedInput label="Meal Type" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {mealTypes.map((mealTypes) => (
            <MenuItem key={mealTypes} value={mealTypes}>
              <Checkbox checked={mealName.indexOf(mealTypes) > -1} />
              <ListItemText primary={mealTypes} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
