import React, { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
  CircularProgress
} from '@mui/material';

const skinConcerns = [
  'Acne',
  'Blackheads',
  'Dryness',
  'Oiliness',
  'Redness',
  'Dark Spots',
  'Wrinkles',
  'Puffiness',
  'Sensitivity'
];

const Questionnaire = () => {
  const [skinType, setSkinType] = useState('');
  const [concerns, setConcerns] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConcernChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setConcerns(typeof value === 'string' ? value.split(',') : value);
    if (error) setError(''); // Clear error when user makes selection
  };

  const handleSkinTypeChange = (value: string) => {
    setSkinType(value);
    if (error) setError(''); // Clear error when user makes selection
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!skinType) {
      setError('Please select your skin type');
      return;
    }
    
    if (concerns.length === 0) {
      setError('Please select at least one skin concern');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      console.log('Submitting:', { skinType, concerns });
      // Simulate API call (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      // await axios.post('/api/analyze', { skinType, concerns });
      console.log('Analysis submitted successfully!');
    } catch (err) {
      setError('Failed to submit analysis. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Skin Analysis
      </Typography>
      
      {/* Skin Type Selection */}
      <FormControl fullWidth sx={{ mb: 3 }} error={!skinType && !!error}>
        <InputLabel>Skin Type</InputLabel>
        <Select
          value={skinType}
          label="Skin Type"
          onChange={(e) => handleSkinTypeChange(e.target.value as string)}
          required
        >
          <MenuItem value="dry">Dry</MenuItem>
          <MenuItem value="oily">Oily</MenuItem>
          <MenuItem value="combination">Combination</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="sensitive">Sensitive</MenuItem>
        </Select>
      </FormControl>

      {/* Skin Concerns Multi-Select */}
      <FormControl fullWidth sx={{ mb: 4 }} error={concerns.length === 0 && !!error}>
        <InputLabel>Main Concerns</InputLabel>
        <Select
          multiple
          value={concerns}
          onChange={handleConcernChange}
          input={<OutlinedInput label="Main Concerns" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {skinConcerns.map((concern) => (
            <MenuItem key={concern} value={concern}>
              {concern}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Error Message */}
      {error && (
        <Typography color="error" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          ⚠️ {error}
        </Typography>
      )}

      {/* Submit Button */}
      <Button 
        type="submit" 
        variant="contained" 
        size="large" 
        fullWidth
        sx={{ mt: 2 }}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <CircularProgress size={24} sx={{ color: 'white', mr: 2 }} />
            Analyzing...
          </>
        ) : (
          'Analyze My Skin'
        )}
      </Button>
    </Box>
  );
};

export default Questionnaire;