import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({product}) {
    const navigate=useNavigate()
  return (
    <Card sx={{ width:'100%' , height : '450px'}}>
      <CardMedia
        sx={{height: '40%',width:'100%' }}
        image={import.meta.env.VITE_FILE_URL+product.images[0]}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" fontSize={'1.2rem'} component="div">
        Category : {product.categoryId.title}
        </Typography>
        <Typography gutterBottom variant="h5" fontSize={'1.4rem'} component="div">
         {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {product.description.split(' ').slice(0.9).join(' ')}...
        </Typography>
        <Typography gutterBottom variant="h4" fontSize={'1.2rem'} component="div">
        Price : $ {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={()=>navigate(`/product-details/${product._id}/${product.name.replaceAll(' ','-')}`)}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

