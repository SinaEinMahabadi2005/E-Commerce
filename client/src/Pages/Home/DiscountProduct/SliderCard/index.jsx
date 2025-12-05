// import { Box, Typography } from "@mui/material";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function SliderCard({ product }) {
//   const navigate = useNavigate();
//   return (
//     <Box
//       onClick={() =>
//         navigate(
//           `/product-details/${product._id}/${product.name.replaceAll(" ", "-")}`
//         )
//       }
//     >
//       <img
//         src={import.meta.env.VITE_FILE_URL + product.image}
//         alt={product.name}
//       />
//       <Box>
//         <Typography>{product.name}</Typography>
//         <Typography>
//           {product.description.split(" ").slice(0, 8).join(" ")}
//         </Typography>
//         <Typography>Quantity : {product.quantity}</Typography>
//         <Typography>Price : {product.price}</Typography>
//       </Box>
//     </Box>
//   );
// }
import { Box, Typography, Chip, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SliderCard({ product }) {
    const navigate = useNavigate();
    
    // Calculate if product is low in stock
    const isLowStock = product.quantity < 10;
    const isOutOfStock = product.quantity === 0;

    return (
        <Card
            onClick={() =>
                navigate(
                    `/product-details/${product._id}/${product.name.replaceAll(" ", "-")}`
                )
            }
            sx={{
                height: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    borderColor: 'primary.main',
                },
                position: 'relative'
            }}
        >
            {/* Stock Status Badge */}
            {isLowStock && !isOutOfStock && (
                <Chip 
                    label="Low Stock" 
                    color="warning" 
                    size="small"
                    sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 2,
                        fontWeight: '600',
                        fontSize: '0.75rem'
                    }}
                />
            )}
            {isOutOfStock && (
                <Chip 
                    label="Out of Stock" 
                    color="error" 
                    size="small"
                    sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 2,
                        fontWeight: '600',
                        fontSize: '0.75rem'
                    }}
                />
            )}

            {/* Product Image */}
            <CardMedia
                component="img"
                height="200"
                image={import.meta.env.VITE_FILE_URL + product.images[0]}
                alt={product.name}
                sx={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)'
                    }
                }}
            />

            {/* Product Content */}
            <CardContent sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column',
                padding: '20px 16px 16px 16px',
                '&:last-child': {
                    paddingBottom: '16px'
                }
            }}>
                {/* Product Name */}
                <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{
                        fontWeight: '600',
                        fontSize: '1rem',
                        lineHeight: 1.4,
                        mb: 1,
                        color: 'text.primary',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '2.8rem'
                    }}
                >
                    {product.name}
                </Typography>

                {/* Product Description */}
                <Typography 
                    variant="body2"
                    sx={{
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                        mb: 2,
                        flexGrow: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {product.description.split(" ").slice(0, 12).join(" ")}
                    {product.description.split(" ").length > 12 ? "..." : ""}
                </Typography>

                {/* Product Details */}
                <Box sx={{ mt: 'auto' }}>
                    {/* Quantity */}
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1
                    }}>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                fontWeight: '500',
                                color: 'text.secondary'
                            }}
                        >
                            Available:
                        </Typography>
                        <Chip 
                            label={product.quantity} 
                            size="small"
                            variant="outlined"
                            color={isLowStock ? "warning" : "success"}
                            sx={{ fontWeight: '600' }}
                        />
                    </Box>

                    {/* Price */}
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTop: '1px solid',
                        borderColor: 'divider',
                        pt: 1
                    }}>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                fontWeight: '500',
                                color: 'text.secondary'
                            }}
                        >
                            Price:
                        </Typography>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                fontWeight: '700',
                                color: 'primary.main',
                                fontSize: '1.125rem'
                            }}
                        >
                            ${product.price}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}