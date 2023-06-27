import { useContext, useState } from 'react';
import * as Yup from 'yup';
// next
import NextLink from 'next/link';
import { signIn, getSession } from 'next-auth/react';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import StepContext from 'src/context/stepContext';
import { LoginAuthContext } from 'src/context/LoginAuthContext';
// routes
import { PATH_AUTH } from '../../routes/paths';
// auth
// components
import FormProvider, { RHFTextField } from '../../components/hook-form';

// ----------------------------------------------------------------------

type FormValuesProps = {
  userName: string;
  password: string;
  afterSubmit?: string;
};

export default function AuthLoginForm() {
  // const { login } = useAuthContext();

  const contextValue = useContext(StepContext);
  const emailValue = useContext(LoginAuthContext);

  if (!contextValue) {
    throw new Error('EmailForm must be used within a StepContextProvider');
  }

  const { setStep } = contextValue;
  const { setEmail } = emailValue;

  // const login = async (userName: string, password: string) => {
  //   console.log('test');
  //   await signIn('credentials', {
  //     redirect: false,
  //     userName,
  //     password,
  //   });

  //   const session = await getSession();

  //   if (!session) {
  //     throw new Error('Login failed!');
  //   }
  // };

  // const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    userName: Yup.string().required('Username is required'),
    // password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    userName: 'jDoe',
    // password: 'Hello123',
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

  const handleNext = (data: FormValuesProps) => {
    // router.push(`/page-two?email=${email}`);
    setEmail(data.userName);
    setStep(2);
  };

  // const onSubmit = async (data: FormValuesProps) => {
  //   try {
  //     await login(data.userName, data.password);
  //   } catch (error) {
  //     console.log(error);
  //     reset();
  //     setError('afterSubmit', {
  //       ...error,
  //       message: error.message || error,
  //     });
  //   }
  // };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(handleNext)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Typography variant="body2">Enter your details</Typography>

        <RHFTextField name="firstName" label="First Name" />
        <RHFTextField name="lastName" label="Last Name" />
        <RHFTextField name="userName" label="User Name" helperText="Do not use characters $,&,*" />
        <RHFTextField name="password" label="Password" helperText="Atleast 8 characters long" />
        <RHFTextField name="password" label="Confirm Password" />
      </Stack>

      <Stack
        direction="row"
        spacing={0.5}
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 3 }}
      >
        <Link
          component={NextLink}
          href={PATH_AUTH.login}
          variant="subtitle2"
          sx={{
            color: 'secondary.main',
            '&:hover': {
              bgcolor: 'rgb(239 246 255)',
              color: 'secondary.dark',
            },
          }}
        >
          SignIn Instead
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
          Create Account
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
