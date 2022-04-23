import { getAccessToken, getSession } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from 'next';

export default function Index() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);

  console.log(getAccessToken(req, res));

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      },
    };
  } else {
    console.log(session);

    return {
      redirect: {
        destination: '/app',
        permanent: false,
      },
    };
  }
};
