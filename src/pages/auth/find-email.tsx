// next
import Head from 'next/head';
// auth
import GuestGuard from '../../auth/GuestGuard';
// sections
import FindYourEmail from '../../sections/auth/FindYourEmail';

// ----------------------------------------------------------------------

export default function FindYourEmailPage() {
  return (
    <>
      <Head>
        <title> Register | Minimal UI</title>
      </Head>

      <GuestGuard>
        <FindYourEmail />
      </GuestGuard>
    </>
  );
}
