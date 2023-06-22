// @mui
import { styled } from '@mui/material/styles';
// colors
import { grey } from '@mui/material/colors';

// ----------------------------------------------------------------------

export const StyledRoot = styled('main')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: grey[100],
  padding: "20px",
})); 

export const StyledSection = styled('div')(() => ({
  width: "100%", 
  maxWidth: "500px", 
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "8px" 
}));
  