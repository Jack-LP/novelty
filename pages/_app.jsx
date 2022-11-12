import '../styles/globals.css';
import { UserWrapper } from '../context/UserContext';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <UserWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserWrapper>
  );
}

export default MyApp;
