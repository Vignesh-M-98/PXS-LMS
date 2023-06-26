// next
// @mui
import { Tooltip, Stack, Typography, Box, Avatar, Chip } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';
// routes
//
import AuthPasswordInputForm from './AuthPasswordInputForm';
import AuthVerifyCodeForm from './AuthVerifyCodeForm';
import AuthSecurityQuestionInputForm from './AuthSecurityQuestionInputForm';

// ----------------------------------------------------------------------

export default function RecoverAccount() {
  const { method } = useAuthContext();

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative', alignItems: 'center' }}>
        <Tooltip title={method} placement="top">
          <Box
            component="img"
            alt={method}
            src={`/assets/icons/auth/ic_${method}.png`}
            sx={{ width: 32, height: 32, position: 'relative', right: 0 }}
          />
        </Tooltip>
        <Typography variant="h3" align="center">
          Account Recovery
        </Typography>

              <Stack direction="column" spacing={2} sx={{}}>
          <Typography variant="body1">
            This helps show that this account really belongs to you
          </Typography>
          <Chip avatar={<Avatar>M</Avatar>} label="Avatar" size='medium'/>
        </Stack>
      </Stack>
      <AuthSecurityQuestionInputForm />
    </LoginLayout>
  );
}
