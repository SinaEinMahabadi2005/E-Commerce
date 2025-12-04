// import { Badge, Box, Button, FormControl, Input, InputAdornment, InputLabel, Stack, Typography } from "@mui/material";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { logout } from "../../Store/Slice/AuthSlice";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import SearchIcon from "@mui/icons-material/Search";
// export default function Navbar() {
//   const navigate = useNavigate();
//   const { token } = useSelector((state) => state.auth);
//   const cartLength = useSelector((state) => state.cart.items).length;
//   const dispath = useDispatch();
//   return (
//     <Stack
//       flexDirection={"row"}
//       component={"nav"}
//       justifyContent={"space-between"}
//       px={"32px"}
//     >
//       <Stack flexDirection={"row"} alignItems={"center"} gap={"16px"}>
//         <Typography component={"h1"} variant="h3" onClick={() => navigate("/")}>
//           E-Commerce
//         </Typography>
//         <Link to={"/"}>Home</Link>
//         <Link to={"/products/all/all-category"}>Products</Link>
//         <Link to={"/about"}>About</Link>
//         {token ? (
//           <>
//             <Link to={"/profile"}>Profile</Link>
//             <Button onClick={() => dispath(logout())}>Logout</Button>
//           </>
//         ) : (
//           <Link to={"/auth"}>Login/Register</Link>
//         )}
//       </Stack>
//       <Stack flexDirection={"row"} justifyContent={'center'} alignItems={'center'} gap={'16px'}>
//         <Box>
//           <FormControl variant="standard">
            
//             <Input placeholder="Search Products ..."
//               id="input-with-icon-adornment"
//               startAdornment={
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               }
//             />
//           </FormControl>
//           <Stack>{/*Saerch Result*/} </Stack>
//         </Box>
//         <Box>
//           <Badge badgeContent={cartLength} color="primary">
//             <ShoppingCartIcon color="action" />
//           </Badge>
//         </Box>
//       </Stack>
//     </Stack>
//   );
// }
import { Badge, Box, Button, FormControl, Input, InputAdornment, InputLabel, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Store/Slice/AuthSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const cartLength = useSelector((state) => state.cart.items).length;
  const dispath = useDispatch();
  
  return (
    <Stack
      component="nav"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={4}
      py={2}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Stack direction="row" alignItems="center" gap={3}>
        <Typography 
          component="h1" 
          variant="h4" 
          onClick={() => navigate("/")}
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.9,
            }
          }}
        >
          E-Commerce
        </Typography>
        
        <Link 
          to="/" 
          style={{
            textDecoration: 'none',
            color: 'text.secondary',
            fontWeight: 500,
            padding: '8px 12px',
            borderRadius: '6px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#1976d2';
            e.currentTarget.style.backgroundColor = 'rgba(25, 118, 210, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '';
            e.currentTarget.style.backgroundColor = '';
          }}
        >
          Home
        </Link>
        
        <Link 
          to="/products/all/all-category"
          style={{
            textDecoration: 'none',
            color: 'text.secondary',
            fontWeight: 500,
            padding: '8px 12px',
            borderRadius: '6px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#1976d2';
            e.currentTarget.style.backgroundColor = 'rgba(25, 118, 210, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '';
            e.currentTarget.style.backgroundColor = '';
          }}
        >
          Products
        </Link>
        
        <Link 
          to="/about"
          style={{
            textDecoration: 'none',
            color: 'text.secondary',
            fontWeight: 500,
            padding: '8px 12px',
            borderRadius: '6px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#1976d2';
            e.currentTarget.style.backgroundColor = 'rgba(25, 118, 210, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '';
            e.currentTarget.style.backgroundColor = '';
          }}
        >
          About
        </Link>
        
        {token ? (
          <>
            <Link 
              to="/profile"
              style={{
                textDecoration: 'none',
                color: 'text.secondary',
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#1976d2';
                e.currentTarget.style.backgroundColor = 'rgba(25, 118, 210, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '';
                e.currentTarget.style.backgroundColor = '';
              }}
            >
              Profile
            </Link>
            <Button 
              onClick={() => dispath(logout())}
              variant="outlined"
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                fontWeight: 600,
                borderColor: 'error.main',
                color: 'error.main',
                '&:hover': {
                  borderColor: 'error.dark',
                  backgroundColor: 'rgba(211, 47, 47, 0.04)',
                }
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link 
            to="/auth"
            style={{
              textDecoration: 'none',
              color: 'text.secondary',
              fontWeight: 500,
              padding: '8px 12px',
              borderRadius: '6px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#1976d2';
              e.currentTarget.style.backgroundColor = 'rgba(25, 118, 210, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '';
              e.currentTarget.style.backgroundColor = '';
            }}
          >
            Login/Register
          </Link>
        )}
      </Stack>
      
      <Stack direction="row" justifyContent="center" alignItems="center" gap={3}>
        <Box>
          <FormControl variant="standard">
            <Input
              placeholder="Search Products ..."
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'action.active' }} />
                </InputAdornment>
              }
              sx={{
                backgroundColor: 'rgba(0,0,0,0.02)',
                borderRadius: '25px',
                padding: '8px 16px',
                width: '300px',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(25, 118, 210, 0.02)',
                },
                '&:before, &:after': {
                  display: 'none',
                },
              }}
            />
          </FormControl>
          <Stack>{/*Saerch Result*/}</Stack>
        </Box>
        
        <Box>
          <Badge 
            badgeContent={cartLength} 
            color="primary"
            sx={{
              '& .MuiBadge-badge': {
                fontWeight: 'bold',
                boxShadow: '0 0 0 2px white',
              }
            }}
          >
            <ShoppingCartIcon 
              color="action" 
              sx={{
                fontSize: 32,
                padding: '4px',
                borderRadius: '50%',
                backgroundColor: 'rgba(25, 118, 210, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.2)',
                  cursor: 'pointer',
                }
              }}
              onClick={() => navigate('/cart')}
            />
          </Badge>
        </Box>
      </Stack>
    </Stack>
  );
}