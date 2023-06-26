import * as Yup from 'yup';
// next
import { useRouter } from 'next/router';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, FormHelperText, Link, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import { useSnackbar } from '../../components/snackbar';
import FormProvider, { RHFCodes, RHFTextField } from '../../components/hook-form';

// ----------------------------------------------------------------------

type FormValuesProps = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
};

export default function AuthVerifyCodeForm() {
  const { push } = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required('Code is required'),
    code2: Yup.string().required('Code is required'),
    code3: Yup.string().required('Code is required'),
    code4: Yup.string().required('Code is required'),
    code5: Yup.string().required('Code is required'),
    code6: Yup.string().required('Code is required'),
  });

  const defaultValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log('DATA', Object.values(data).join(''));
      enqueueSnackbar('Verify success!');
      push(PATH_DASHBOARD.root);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} sx={{ alignItems: 'center' }}>
        <Typography variant="body2">
          A text message with a 6 digit verification code was just sent to +91 977...777
        </Typography>

        <RHFTextField name="Code" variant="outlined" label="Enter the code" type="number" />
      </Stack>
      <Stack
        direction="row"
        spacing={0.5}
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 3 }}
      >
        <Link
          variant="subtitle2"
          sx={{
            color: 'rgb(59 130 246)',
            '&:hover': {
              bgcolor: 'rgb(239 246 255)',
              color: 'rgb(29 78 216)',
            },
          }}
        >
          I don&#39;t have a phone
        </Link>
        <LoadingButton
          color="inherit"
          size="medium"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{
            bgcolor: 'rgb(59 130 246)',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.default',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            },
          }}
        >
          Next
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
