// next
// @mui
import { Tooltip, Stack, Typography, Box } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';
// routes
//
import AuthLoginForm from './AuthLoginForm';

// ----------------------------------------------------------------------

export default function Login() {
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
          Sign in
        </Typography>

        <Stack direction="row">
          <Typography variant="body1">Use your Google Account</Typography>
        </Stack>
      </Stack>
      <AuthLoginForm />
    </LoginLayout>
  );
}
