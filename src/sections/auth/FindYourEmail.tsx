// next
// @mui
import { Tooltip, Stack, Typography, Box } from '@mui/material';
// auth
// layouts
import { useAuthContext } from 'src/auth/useAuthContext';
import LoginLayout from '../../layouts/login';
import AuthFindYourEmailInputForm from './AuthFindYourEmailInputForm';
// routes
//

// ----------------------------------------------------------------------

export default function FindYourEmail() {
  const { method } = useAuthContext();

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative', alignItems: 'center' }}>
        <Tooltip title={method} placement="top">
          <Box
            component="img"
            alt={method}
            src="/logo/PAXLogoMark.svg"
            sx={{ width: 80, height: 80, position: 'relative', right: 0 }}
          />
        </Tooltip>
        <Typography variant="h3" align="center">
          Find Your Email
        </Typography>

        <Stack direction="row">
          <Typography variant="body1">Enter your phone number or recovery email</Typography>
        </Stack>
      </Stack>
      <AuthFindYourEmailInputForm />
    </LoginLayout>
  );
}
