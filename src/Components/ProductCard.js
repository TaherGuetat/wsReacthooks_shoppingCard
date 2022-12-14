import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ el, handelAdd,handleDeleteProd }) => {
  return (
    <div style={{ marginTop: "10px", borderStyle: "solid" }}>
      <Card sx={{ maxWidth: 345 }}>
        <Link to={`/details/${el.id}`}>
        <CardMedia
          component="img"
          height="140"
          image={el.image}
          style={{ width: "150px" }}
          alt="green iguana"
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {el.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {el.price} DT
            <p>Quantity:{el.QtS}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handelAdd(el)}>
            AddToCard
          </Button>
          <Link to={`/edit/${el.id}`}>Edit</Link>
          <Button onClick={()=>handleDeleteProd(el.id)}>Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
