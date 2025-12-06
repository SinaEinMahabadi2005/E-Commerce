import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/fetchData";
import { 
  Box, 
  Button, 
  Stack, 
  Typography, 
  Container,
  Grid,
  Chip,
  Divider,
  IconButton,
  Card,
  useMediaQuery
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Store/Slice/CartSlice";
import {
  AddShoppingCart,
  Remove,
  Add,
  FavoriteBorder,
  Share,
  LocalShipping,
  AssignmentReturn,
  Security
} from "@mui/icons-material";

// Skeleton Loading Component
export function ProductDetailsSkeleton() {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Image Skeleton */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Box
              sx={{
                width: '100%',
                height: isMobile ? 300 : 500,
                borderRadius: 2,
                bgcolor: 'grey.200',
                animation: 'pulse 1.5s ease-in-out infinite',
              }}
            />
          </Stack>
        </Grid>

        {/* Content Skeleton */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            {/* Category */}
            <Box
              sx={{
                width: '100px',
                height: '24px',
                bgcolor: 'grey.200',
                borderRadius: 1,
                animation: 'pulse 1.5s ease-in-out infinite',
              }}
            />
            
            {/* Product Name */}
            <Box
              sx={{
                width: '80%',
                height: '32px',
                bgcolor: 'grey.200',
                borderRadius: 1,
                animation: 'pulse 1.5s ease-in-out infinite',
              }}
            />
            
            {/* Price */}
            <Box
              sx={{
                width: '120px',
                height: '40px',
                bgcolor: 'grey.200',
                borderRadius: 1,
                animation: 'pulse 1.5s ease-in-out infinite',
              }}
            />
            
            {/* Description */}
            <Stack spacing={1}>
              {[1, 2, 3].map((item) => (
                <Box
                  key={item}
                  sx={{
                    width: item === 2 ? '90%' : '100%',
                    height: '16px',
                    bgcolor: 'grey.200',
                    borderRadius: 1,
                    animation: 'pulse 1.5s ease-in-out infinite',
                  }}
                />
              ))}
            </Stack>
            
            {/* Quantity */}
            <Box
              sx={{
                width: '150px',
                height: '20px',
                bgcolor: 'grey.200',
                borderRadius: 1,
                animation: 'pulse 1.5s ease-in-out infinite',
              }}
            />
            
            {/* Add to Cart Button */}
            <Box
              sx={{
                width: '200px',
                height: '40px',
                bgcolor: 'grey.200',
                borderRadius: 1,
                animation: 'pulse 1.5s ease-in-out infinite',
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

// Main Product Details Component
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width:900px)');

  const cartQuantity =
    useSelector((state) => state.cart.items).find((item) => item._id.toString() == id.toString())
      ?.cartQuantity || 0;
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetchData(`product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" color="error">
          Product not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Card 
            sx={{ 
              p: 2, 
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: isMobile ? 300 : 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'background.paper'
              }}
            >
              <img
                src={import.meta.env.VITE_FILE_URL+product?.images[0]}
                alt={product?.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </Box>
            
            {/* Additional Images Thumbnails */}
            {product?.images?.length > 1 && (
              <Stack 
                direction="row" 
                spacing={1} 
                justifyContent="center" 
                sx={{ mt: 2 }}
              >
                {product.images.slice(0, 4).map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 1,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: '2px solid transparent',
                      '&:hover': {
                        border: '2px solid #1976d2'
                      }
                    }}
                  >
                    <img
                      src={import.meta.env.VITE_FILE_URL+image}
                      alt={`${product.name} ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            )}
          </Card>
        </Grid>

        {/* Product Information */}
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            {/* Category */}
            <Chip
              label={product?.categoryId?.title}
              color="primary"
              variant="outlined"
              sx={{ 
                alignSelf: 'flex-start',
                fontWeight: 600 
              }}
            />

            {/* Product Name */}
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                fontSize: isMobile ? '1.75rem' : '2.5rem',
                lineHeight: 1.2
              }}
            >
              {product?.name}
            </Typography>

            {/* Price */}
            <Typography 
              variant="h2" 
              sx={{ 
                color: 'primary.main',
                fontWeight: 700,
                fontSize: isMobile ? '2rem' : '2.5rem'
              }}
            >
              ${product?.price}
            </Typography>

            {/* Description */}
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: 'text.secondary'
              }}
            >
              {product?.description}
            </Typography>

            {/* Stock Information */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: product?.quantity > 10 ? 'success.main' : 
                          product?.quantity > 0 ? 'warning.main' : 'error.main'
                }}
              />
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {product?.quantity > 0 
                  ? `${product.quantity} items in stock` 
                  : 'Out of stock'
                }
              </Typography>
            </Box>

            <Divider />

            {/* Add to Cart Section */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Quantity
              </Typography>
              
              {cartQuantity > 0 ? (
                <Stack direction="row" alignItems="center" spacing={2}>
                  <IconButton 
                    onClick={() => dispatch(removeItem(product._id))}
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      }
                    }}
                  >
                    <Remove />
                  </IconButton>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      minWidth: 40, 
                      textAlign: 'center',
                      fontWeight: 600
                    }}
                  >
                    {cartQuantity}
                  </Typography>
                  
                  <IconButton 
                    disabled={cartQuantity >= product?.quantity}
                    onClick={() => dispatch(addItem(product))}
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                      '&.Mui-disabled': {
                        bgcolor: 'grey.300'
                      }
                    }}
                  >
                    <Add />
                  </IconButton>
                </Stack>
              ) : (
                <Button 
                  disabled={product?.quantity <= 0}
                  onClick={() => dispatch(addItem(product))}
                  variant="contained"
                  size="large"
                  startIcon={<AddShoppingCart />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                    '&:hover': {
                      boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {product?.quantity <= 0 ? 'Out of Stock' : 'Add to Cart'}
                </Button>
              )}
            </Box>

            {/* Action Buttons */}
            <Stack direction="row" spacing={2}>
              <IconButton 
                sx={{ 
                  border: '1px solid',
                  borderColor: 'grey.300',
                  borderRadius: 2
                }}
              >
                <FavoriteBorder />
              </IconButton>
              <IconButton 
                sx={{ 
                  border: '1px solid',
                  borderColor: 'grey.300',
                  borderRadius: 2
                }}
              >
                <Share />
              </IconButton>
            </Stack>

            {/* Features */}
            <Card 
              sx={{ 
                p: 3, 
                borderRadius: 2,
                bgcolor: 'grey.50',
                border: '1px solid',
                borderColor: 'grey.200'
              }}
            >
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocalShipping sx={{ color: 'primary.main' }} />
                  <Typography variant="body2" fontWeight={600}>
                    Free shipping on orders over $50
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <AssignmentReturn sx={{ color: 'primary.main' }} />
                  <Typography variant="body2" fontWeight={600}>
                    30-day return policy
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Security sx={{ color: 'primary.main' }} />
                  <Typography variant="body2" fontWeight={600}>
                    2-year warranty included
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
