import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import React from 'react'

export const FilterProdact = ({handleFilterbn,handleFilterrate,handleCategory}) => {
  
  

  const handleChange = (event) => {
    handleCategory(event.target.value);
  };
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <input type="text" name="" id="" onChange={(e)=>handleFilterbn(e.target.value)}/>
      <Rating
        name="simple-controlled"
        
        onChange={(event, newValue) => {
          handleFilterrate(newValue);
        }}
      />
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'category'}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={'All'}>All</MenuItem>
          <MenuItem value={'electronics'}>Electronics</MenuItem>
          <MenuItem value={'jewelery'}>Jewelery</MenuItem>
          <MenuItem value={'men'}>Men</MenuItem>
          <MenuItem value={'women'}>Women</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    </div>
  )
}


