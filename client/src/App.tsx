import React from 'react';
// Remove Button from the imports since it's not used directly in App.tsx
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import Questionnaire from './components/Questionnaire';

function App() {
  return (
    <>
      <CssBaseline /> {/* Normalizes CSS across browsers */}
      <Container maxWidth="md" sx={{ 
        padding: { xs: '1rem', sm: '2rem' },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Header Section */}
        <Box sx={{ 
          textAlign: 'center',
          mb: 4,
          width: '100%'
        }}>
          <Typography 
            variant="h3" 
            component="h1"
            sx={{ 
              fontWeight: 700,
              mb: 2,
              color: 'primary.main',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            AI Skin Care Assistant
          </Typography>
          <Typography 
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
              mb: 4
            }}
          >
            Get personalized recommendations for your skin type
          </Typography>
        </Box>

        {/* Questionnaire Component */}
        <Box sx={{
          width: '100%',
          maxWidth: '600px',
          bgcolor: 'background.paper',
          boxShadow: 3,
          borderRadius: 2,
          p: { xs: 2, sm: 3, md: 4 }
        }}>
          <Questionnaire />
        </Box>

        {/* Footer */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} SkinCare AI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
