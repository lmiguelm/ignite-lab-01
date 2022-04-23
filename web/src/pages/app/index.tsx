import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useMeQuery } from '../../graphql/generated/graphql';
// import { useGetProductsQuery } from '../../graphql/generated/graphql';
import { getServerPageGetProducts, ssrGetProducts } from '../../graphql/generated/page';
import { withApollo } from '../../lib/withApollo';

function Home({ data }: any) {
  const { user } = useUser();

  // const { data } = useGetProductsQuery();
  const { data: me } = useMeQuery();

  return (
    <div>
      <h1>Hello world</h1>
      <pre>ok: {JSON.stringify(me, null, 2)}</pre>

      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // return await getServerPageGetProducts({}, ctx);
    return {
      props: {},
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
