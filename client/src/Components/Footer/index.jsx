import { Box, Container, Grid, Typography, Link, IconButton, Stack, Divider } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              E-Commerce
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Your one-stop destination for premium products. We deliver quality and style right to your doorstep.
            </Typography>
            
            {/* Social Media */}
            <Stack direction="row" spacing={1} mt={2}>
              <IconButton 
                sx={{ 
                  backgroundColor: 'rgba(25, 118, 210, 0.1)',
                  '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.2)' }
                }}
                href="https://facebook.com"
                target="_blank"
              >
                <FacebookIcon sx={{ color: '#1976d2' }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  backgroundColor: 'rgba(29, 161, 242, 0.1)',
                  '&:hover': { backgroundColor: 'rgba(29, 161, 242, 0.2)' }
                }}
                href="https://twitter.com"
                target="_blank"
              >
                <TwitterIcon sx={{ color: '#1da1f2' }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  backgroundColor: 'rgba(225, 48, 108, 0.1)',
                  '&:hover': { backgroundColor: 'rgba(225, 48, 108, 0.2)' }
                }}
                href="https://instagram.com"
                target="_blank"
              >
                <InstagramIcon sx={{ color: '#e1306c' }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  backgroundColor: 'rgba(10, 102, 194, 0.1)',
                  '&:hover': { backgroundColor: 'rgba(10, 102, 194, 0.2)' }
                }}
                href="https://linkedin.com"
                target="_blank"
              >
                <LinkedInIcon sx={{ color: '#0a66c2' }} />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link 
                component={RouterLink} 
                to="/" 
                color="text.secondary"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { 
                    color: 'primary.main',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }
                }}
              >
                Home
              </Link>
              <Link 
                component={RouterLink} 
                to="/products/all/all-category" 
                color="text.secondary"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { 
                    color: 'primary.main',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }
                }}
              >
                Products
              </Link>
              <Link 
                component={RouterLink} 
                to="/about" 
                color="text.secondary"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { 
                    color: 'primary.main',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }
                }}
              >
                About Us
              </Link>
              <Link 
                component={RouterLink} 
                to="/contact" 
                color="text.secondary"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { 
                    color: 'primary.main',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }
                }}
              >
                Contact
              </Link>
            </Stack>
          </Grid>

          {/* Customer Service */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Help & Support
            </Typography>
            <Stack spacing={1}>
              <Link 
                href="#" 
                color="text.secondary"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { 
                    color: 'primary.main',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }
                }}
              >
                FAQ
              </Link>
              <Link 
                href="#" 
                color="text.secondary"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { 
                    color: 'primary.main',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }
                }}
              >
                Shipping Policy
              </Link>
              <Link 
                href="#" 
                color="text.secondary"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { 
                    color: 'primary.main',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }
                }}
              >
                Returns & Refunds
              </Link>
              <Link 
                href="#" 
                color="text.secondary"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { 
                    color: 'primary.main',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }
                }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="#" 
                color="text.secondary"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { 
                    color: 'primary.main',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }
                }}
              >
                Terms of Service
              </Link>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOnIcon sx={{ color: 'primary.main' }} />
                <Typography variant="body2" color="text.secondary">
                  123 Commerce Street, Cityville, ST 12345
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon sx={{ color: 'primary.main' }} />
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <EmailIcon sx={{ color: 'primary.main' }} />
                <Typography variant="body2" color="text.secondary">
                  support@ecommerce.com
                </Typography>
              </Stack>
            </Stack>

            {/* Features */}
            <Box mt={4}>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                We Accept
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <PaymentIcon sx={{ color: 'success.main' }} />
                <Typography variant="caption">All Major Credit Cards</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                <SecurityIcon sx={{ color: 'success.main' }} />
                <Typography variant="caption">Secure Payments</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                <LocalShippingIcon sx={{ color: 'success.main' }} />
                <Typography variant="caption">Fast Delivery</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Typography variant="body2" color="text.secondary">
            © {currentYear} E-Commerce. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Designed with ❤️ for the shopping community
          </Typography>
        </Box>

        {/* Newsletter Signup (Optional) */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            Subscribe to our newsletter for updates and exclusive offers
          </Typography>
          {/* You can add a newsletter form here if needed */}
        </Box>
      </Container>
    </Box>
  );
} 