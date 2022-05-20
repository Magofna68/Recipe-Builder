import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function ComboBox () {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      disablePortal
      options={cuisineOriginArray}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      defaultValue={[cuisineOriginArray[4]]}
      renderInput={(params) => <TextField {...params} label="Cuisine Origin" placeholder="What kind of Cuisine is it?" />}
    />
  )
}

const cuisineOriginArray = [
  {title: 'American', value: 'American'},
  {title: 'Chinese', value: 'Chinese'},
  {title: 'Comfort', value: 'Comfort'},
  {title: 'French', value: 'French'},
  {title: 'Greek', value: 'Greek'},
  {title: 'Italian', value: 'Italian'},
  {title: 'Indian', value: 'Indian'},
  {title: 'Japanese', value: 'Japanese'},
  {title: 'Mediterranean', value: 'Mediterranean'},
  {title: 'Oriental', value: 'Oriental'},
  {title: 'Spanish', value: 'Spanish'},
  {title: 'Thai', value: 'Thai'},
  {title: 'Other', value: 'Other'},
];

