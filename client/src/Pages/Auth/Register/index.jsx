import { useState } from "react";
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Container,
  Paper,
  Stack,
  Divider,
  InputAdornment,
  CircularProgress,
  Alert
} from "@mui/material";
import {
  Person,
  Email,
  Lock,
  HowToReg,
  Login
} from "@mui/icons-material";
import useFormFields from "../../../Hooks/useFormFields";
import fetchData from "../../../Utils/fetchData";
import notify from "../../../Utils/notify";

export default function Register({ handlePageTypeChange }) {
  const [fields, handleChange, setFields] = useFormFields({
    username: "",
    password: "",
    email: ""
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!fields.username.trim()) {
      newErrors.username = "Username is required";
    } else if (fields.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!fields.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!fields.password) {
      newErrors.password = "Password is required";
    } else if (fields.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await fetchData('auth/signup', {
        method: "POST",
        body: JSON.stringify(fields),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.success) {
        notify('success', 'Registration Successful!');
        handlePageTypeChange('login');
      } else {
        notify('error', response.message || 'Registration Failed');
        setFields({
          username: "",
          password: "",
          email: ""
        });
      }
    } catch (error) {
      notify('error', 'An error occurred during registration');
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        py: { xs: 4, md: 8 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          width: '100%',
          background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <HowToReg 
            sx={{ 
              fontSize: 48, 
              color: 'primary.main',
              mb: 2
            }} 
          />
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 1
            }}
          >
            Create Account
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Join us today and get started
          </Typography>
        </Box>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={3}>
            {/* Username Field */}
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={fields.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
                  },
                  '&.Mui-focused': {
                    boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.3)'
                  }
                }
              }}
            />

            {/* Email Field */}
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={fields.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
                  },
                  '&.Mui-focused': {
                    boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.3)'
                  }
                }
              }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={fields.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
                  },
                  '&.Mui-focused': {
                    boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.3)'
                  }
                }
              }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
                boxShadow: '0 4px 14px rgba(25, 118, 210, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(25, 118, 210, 0.6)',
                },
                '&:disabled': {
                  background: 'grey.300',
                  transform: 'none',
                  boxShadow: 'none'
                }
              }}
            >
              {loading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={20} color="inherit" />
                  Creating Account...
                </Box>
              ) : (
                "Create Account"
              )}
            </Button>

            {/* Divider */}
            <Divider sx={{ my: 2 }}>
              <Typography variant="body2" color="text.secondary">
                OR
              </Typography>
            </Divider>

            {/* Login Redirect */}
            <Box textAlign="center">
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
              >
                Already have an account?
                <Typography
                  component="span"
                  onClick={() => !loading && handlePageTypeChange('login')}
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.6 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.dark',
                      transform: loading ? 'none' : 'translateX(4px)'
                    }
                  }}
                >
                  Sign In
                  <Login fontSize="small" />
                </Typography>
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Features List */}
        <Box 
          sx={{ 
            mt: 4, 
            p: 3, 
            borderRadius: 2, 
            bgcolor: 'rgba(25, 118, 210, 0.04)',
            border: '1px solid rgba(25, 118, 210, 0.1)'
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Why join us?
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              • Access exclusive features
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              • Save your preferences
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              • Faster checkout process
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}