// next
import Image from 'next/image';
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
import AuthConfirmPasswordInputForm from './AuthConfirmPasswordInputForm';

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
            src="/logo/PAXLogoMark.svg"
            sx={{ width: 80, height: 80, position: 'relative', right: 0 }}
          />
        </Tooltip>
        <Typography variant="h3" align="center">
          Account Recovery
        </Typography>

        <Stack direction="column" spacing={2} sx={{ alignItems: 'center' }}>
          <Typography variant="body1">
            This helps show that this account really belongs to you
          </Typography>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="email@domain.com"
            size="medium"
            sx={{ objectFit: 'fill' }}
          />
        </Stack>
      </Stack>
      <AuthConfirmPasswordInputForm />
    </LoginLayout>
  );
}
