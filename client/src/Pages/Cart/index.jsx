import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Typography,
  Paper,
  Box,
  Stack,
  IconButton,
  Card,
  Container,
  Grid,
  Divider
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../../Store/Slice/CartSlice";
import {
  Add,
  Remove,
  Delete,
  ShoppingCartCheckout,
  ClearAll,
  RemoveShoppingCart
} from "@mui/icons-material";

export default function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const tableItem = items?.map((item, index) => (
    <TableRow 
      key={item._id}
      sx={{
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
        },
        transition: 'all 0.3s ease',
      }}
    >
      <TableCell align="center" sx={{ fontWeight: 600, color: 'text.primary' }}>
        {index + 1}
      </TableCell>
      <TableCell align="center" sx={{ fontWeight: 600, fontSize: '1rem' }}>
        {item.name}
      </TableCell>
      <TableCell align="center">
        <Box
          sx={{
            width: 80,
            height: 80,
            margin: '0 auto',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <img 
            src={import.meta.env.VITE_FILE_URL + item.images[0]} 
            alt={item.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </TableCell>
      <TableCell align="center" sx={{ fontWeight: 600, color: 'primary.main' }}>
        ${item.price}
      </TableCell>
      <TableCell align="center">
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <IconButton 
            onClick={() => dispatch(removeItem(item._id))}
            size="small"
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'scale(1.1)'
              },
              transition: 'all 0.2s ease'
            }}
          >
            <Remove fontSize="small" />
          </IconButton>
          <Typography 
            variant="h6" 
            sx={{ 
              minWidth: 40, 
              textAlign: 'center',
              fontWeight: 600
            }}
          >
            {item.cartQuantity}
          </Typography>
          <IconButton 
            onClick={() => dispatch(addItem(item))}
            disabled={item.cartQuantity >= item.quantity}
            size="small"
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'scale(1.1)'
              },
              '&.Mui-disabled': {
                backgroundColor: 'grey.300'
              },
              transition: 'all 0.2s ease'
            }}
          >
            <Add fontSize="small" />
          </IconButton>
        </Stack>
      </TableCell>
      <TableCell align="center" sx={{ fontWeight: 700, color: 'success.main' }}>
        ${(item.price * item.cartQuantity).toFixed(2)}
      </TableCell>
      <TableCell align="center">
        <IconButton 
          onClick={() => dispatch(removeItem(item._id))}
          sx={{
            color: 'error.main',
            '&:hover': {
              backgroundColor: 'error.light',
              color: 'white',
              transform: 'scale(1.1)'
            },
            transition: 'all 0.2s ease'
          }}
        >
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  ));

  if (items.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            borderRadius: 3,
            backgroundColor: 'background.paper',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}
        >
          <RemoveShoppingCart 
            sx={{ 
              fontSize: 80, 
              color: 'grey.400',
              mb: 2
            }} 
          />
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Your cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Start shopping to add items to your cart
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            href="/products"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none'
            }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        sx={{ 
          mb: 4, 
          fontWeight: 700,
          textAlign: 'center',
          background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}
      >
        Shopping Cart
      </Typography>

      <Grid container spacing={4}>
        {/* Cart Items Table */}
        <Grid item xs={12} lg={8}>
          <Card 
            sx={{ 
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}
          >
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="shopping cart table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'primary.main' }}>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
                      #
                    </TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
                      Product
                    </TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
                      Image
                    </TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
                      Price
                    </TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
                      Quantity
                    </TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
                      Total
                    </TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
                      Remove
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableItem}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} lg={4}>
          <Card 
            sx={{ 
              p: 3, 
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              position: 'sticky',
              top: 100
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, textAlign: 'center' }}>
              Order Summary
            </Typography>

            <Stack spacing={2} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" color="text.secondary">
                  Subtotal ({items.reduce((total, item) => total + item.cartQuantity, 0)} items)
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" color="text.secondary">
                  Shipping
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  Free
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" color="text.secondary">
                  Tax
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  ${(totalPrice * 0.1).toFixed(2)}
                </Typography>
              </Box>

              <Divider />

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={700}>
                  Total
                </Typography>
                <Typography variant="h5" fontWeight={700} color="primary.main">
                  ${(totalPrice * 1.1).toFixed(2)}
                </Typography>
              </Box>
            </Stack>

            <Stack spacing={2}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                startIcon={<ShoppingCartCheckout />}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
                  boxShadow: '0 4px 14px rgba(25, 118, 210, 0.4)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(25, 118, 210, 0.6)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Proceed to Checkout
              </Button>

              <Button
                onClick={() => dispatch(clearCart())}
                variant="outlined"
                size="large"
                fullWidth
                startIcon={<ClearAll />}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderColor: 'error.main',
                  color: 'error.main',
                  '&:hover': {
                    backgroundColor: 'error.main',
                    color: 'white',
                    borderColor: 'error.main',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Clear Cart
              </Button>

              <Button
                variant="text"
                size="medium"
                fullWidth
                href="/products"
                sx={{
                  py: 1,
                  borderRadius: 2,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.04)'
                  }
                }}
              >
                Continue Shopping
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}