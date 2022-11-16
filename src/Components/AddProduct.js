import { React } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, Input } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "black",
  border: "2px solid #ffffff",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

export function AddProduct({ handleAddProduct }) {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",

    QtS: 0,
  });
  const navigate=useNavigate()

  const [rate, setRate] = useState(0);
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const Add = () => {
  if (!product.title || !product.price || !product.description || !product.category || !product.image || !product.Qts) {
    alert('Enter a product')
  } else {
    handleAddProduct({
        id: Math.random(),
        rating: {
          rate: rate,
          count: 0,
        },
        ...product,
      })
      setProduct({
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
    
        QtS: 0,
      })
      setRate(0)
      navigate('/')
  }
  };

  return (
    <>
     
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Product
        </Typography>
        <br />

        <FormControl>
          <InputLabel htmlFor="my-input">Product Title</InputLabel>
          <Input id="my-input" name="title" onChange={handleChange} value={product.title} />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Price</InputLabel>
          <Input id="my-input" name="price" onChange={handleChange} value={product.price} />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Rating</InputLabel>
          <Input
            id="my-input"
            type="number"
            name="rate"
            onChange={(e) => setRate(e.target.value)}
            value={rate}
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Description</InputLabel>
          <Input id="my-input" name="description" onChange={handleChange} value={product.description}/>
        </FormControl>
        <br />
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Image</InputLabel>
          <Input id="my-input" name="image" onChange={handleChange}value={product.image} />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Quantité en stock</InputLabel>
          <Input
            id="my-input"
            type="number"
            name="QtS"
            onChange={handleChange}
            value={product.QtS}
          />
        </FormControl>
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={product.category}
            label="Category"
            onChange={handleChange}
            name='category'
          >
            <MenuItem value={"electronics"}>Electronics</MenuItem>
            <MenuItem value={"jewelery"}>Jewelery</MenuItem>
            <MenuItem value={"men"}>Men</MenuItem>
            <MenuItem value={"women"}>Women</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <Button color="primary" variant="outlined">
          Cancel
        </Button>

        <Button
          color="primary"
          variant="contained"
          onClick={Add}
            
          
        >
          Save Changes
        </Button>
        
    </>
  );
}
