import { Provider } from 'react-redux';
import { useStore } from '../store';
import Layout from '../hocs/Layout';
import { appWithTranslation } from 'next-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Head from 'next/head';
import '../styles/Global.css';
import DemoBanner from '../components/DemoBanner';

// Static export fallback: initialize i18next on the client using the bundled
// translations injected by serverSideTranslations via pageProps._nextI18Next.
// This is needed because next-i18next's appWithTranslation alone does not
// reliably hydrate i18next in a static export (no locale routing).
function initI18nFromProps(pageProps) {
  const i18nProps = pageProps?._nextI18Next;
  if (!i18nProps || i18next.isInitialized) return;

  const { initialLocale, ns, initialI18nStore } = i18nProps;
  const locale = initialLocale || 'en';
  const resources = {};
  if (initialI18nStore) {
    Object.keys(initialI18nStore).forEach(lng => {
      resources[lng] = initialI18nStore[lng];
    });
  }

  i18next.use(initReactI18next).init({
    lng: locale,
    fallbackLng: 'en',
    ns: ns || ['common'],
    defaultNS: 'common',
    resources,
    interpolation: { escapeValue: false },
  });
}

function App({Component, pageProps}) {
  initI18nFromProps(pageProps);

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

export default appWithTranslation(App);
