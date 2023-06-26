// @mui
import { styled } from '@mui/material/styles';
// colors

// ----------------------------------------------------------------------

export const StyledRoot = styled('main')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: 'white',
  padding: '20px',
}));

export const StyledSection = styled('div')(() => ({
  width: '100%',
  maxWidth: '500px',
  backgroundColor: 'white',
  padding: '25px',
  borderRadius: '8px',
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  border: 5,
  borderColor: '#00000',
  outline:''

}));
