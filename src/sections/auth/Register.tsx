// next
// @mui
import { Tooltip, Stack, Typography, Box } from '@mui/material';
import { useMemo, useState } from 'react';
import StepContext from 'src/context/stepContext';

// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';

// routes
//
import AuthLoginForm from './AuthLoginForm';
import AuthPasswordInputForm from './AuthPasswordInputForm';
import AuthRegisterNameInputForm from './AuthRegisterNameInputForm';
// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuthContext();
  const [step, setStep] = useState(1);
  const value = useMemo(() => ({ step, setStep }), [step]);

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
          Register
        </Typography>

        <Stack direction="row">
          <Typography variant="body1">Create your PAX Account</Typography>
        </Stack>
      </Stack>
      <StepContext.Provider value={value}>
        {step === 1 && <AuthRegisterNameInputForm />}
      </StepContext.Provider>
    </LoginLayout>
  );
}
