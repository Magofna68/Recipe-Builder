import React, {useState} from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function ComboBox (props) {
  // console.log("ComboBox", props.cuisineOrigin);
  const [value, setValue ] = useState("");

  console.log(value)
  return (
    <Autocomplete
    // multiple={true}
    // value= {(option)=> option.value}
    // limitTags={2}
    // disablePortal
      name="origin"
      options={props.cuisineOrigin}
      renderInput={(params) => 
      <TextField {...params} 
        label="Cuisine Origin"
        value= {(option)=> option.value}
        placeholder="What kind of Cuisine is it?" />}
      onChange={(_event, addedValue) => {
        // if (value === null) { return} else {
        let updatedValue = {...value}.concat(addedValue);
        setValue(updatedValue);
        console.log(value); }
        }
      // value = {value}
      type="origin"
      getOptionLabel={(option) => option.title}
        // defaultValue={[cuisineOriginArray[4]]}
        // defaultValue={props.cuisineOriginArray}
        />
    )
  }
// const cuisineOriginArray = [
//   {title: 'American', value: 'American'},
//   {title: 'Chinese', value: 'Chinese'},
//   {title: 'Comfort', value: 'Comfort'},
//   {title: 'French', value: 'French'},
//   {title: 'Greek', value: 'Greek'},
//   {title: 'Italian', value: 'Italian'},
//   {title: 'Indian', value: 'Indian'},
//   {title: 'Japanese', value: 'Japanese'},
//   {title: 'Mediterranean', value: 'Mediterranean'},
//   {title: 'Oriental', value: 'Oriental'},
//   {title: 'Spanish', value: 'Spanish'},
//   {title: 'Thai', value: 'Thai'},
//   {title: 'Other', value: 'Other'},
// ];

ComboBox.propTypes = {
  onClick: PropTypes.func,
  cuisineOrigin: PropTypes.array
}