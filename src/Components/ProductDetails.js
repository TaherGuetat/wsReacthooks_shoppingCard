import { useParams } from "react-router-dom"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ProductDetails=({list,handelAdd})=>{
const {id}=useParams()
const detail=list.find(el=>el.id == id)
    return(
        
<div style={{ marginTop: "10px", borderStyle: "solid" }}>
      <Card sx={{ maxWidth: 345 }}>
       
        <CardMedia
          component="img"
          height="140"
          image={detail.image}
          style={{ width: "150px" }}
          alt="green iguana"
        />
     
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detail.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detail.price} DT
            <p>Quantity:{detail.QtS}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handelAdd(detail)}>
            AddToCard
          </Button>
        </CardActions>
      </Card>
    </div>
        
    )
}