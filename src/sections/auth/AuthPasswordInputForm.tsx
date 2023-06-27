import { useContext, useState } from 'react';
import * as Yup from 'yup';
// next
import NextLink from 'next/link';
import router from 'next/router';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import StepContext, { StepContextType } from 'src/context/stepContext';
import { LoginAuthContext } from 'src/context/LoginAuthContext';
import { loginUser } from 'src/services/authService';

// routes
import { PATH_AUTH } from '../../routes/paths';
// auth
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField } from '../../components/hook-form';

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  afterSubmit?: string;
};

export default function AuthPasswordInputForm() {
  // const { login } = useAuthContext();
  const contextValue = useContext(StepContext);
  const emailValue = useContext(LoginAuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const { email } = emailValue;
  const { setStep } = contextValue;
  const LoginSchema = Yup.object().shape({
    // email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    // email: 'demo@minimals.cc',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      const response = await loginUser(email, data.password);

      if (response.status === 200) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
      // reset();
      setError('afterSubmit', {
        ...error,
        message: error.message || error,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack alignItems="flex-start" sx={{ my: 2 }}>
        <Link
          component={NextLink}
          href={PATH_AUTH.resetPassword}
          variant="body2"
          color="inherit"
          underline="always"
        >
          Forgot Password?
        </Link>
      </Stack>
      <Stack
        direction="row"
        spacing={0.5}
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 3 }}
      >
        <Link
          component={NextLink}
          href=""
          variant="subtitle2"
          onClick={() => {
            setStep(1);
          }}
          sx={{
            color: 'secondary.main',
            '&:hover': {
              bgcolor: 'rgb(239 246 255)',
              color: 'secondary.dark',
            },
          }}
        >
          Go Back
        </Link>
        <LoadingButton
          color="inherit"
          size="medium"
          type="submit"
          variant="contained"
          loading={isSubmitSuccessful || isSubmitting}
          sx={{
            bgcolor: 'secondary.main',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.default',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            },
          }}
        >
          Sign in
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
