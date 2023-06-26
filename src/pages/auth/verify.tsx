// next
import Head from 'next/head';
import RecoverAccount from 'src/sections/auth/RecoverAccount';
// import Login from '../../sections/auth/LoginAuth0';

// ----------------------------------------------------------------------

export default function AccountRecoveryPage() {
  return (
    <>
      <Head>
        <title> Verify | Minimal UI</title>
      </Head>

      <RecoverAccount />
    </>
  );
}
