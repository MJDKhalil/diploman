import { Provider } from 'react-redux';
import { useStore } from '../store';
import Layout from '../hocs/Layout';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import '../styles/Global.css';
import DemoBanner from '../components/DemoBanner';


function App({Component, pageProps}) {

  const store = useStore(pageProps.initialReduxState);

  return (
    <>
    <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Head>
      <DemoBanner />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default appWithTranslation (App);
