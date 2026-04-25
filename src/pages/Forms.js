import React from 'react';
import styles from'../styles/Forms.module.css';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import UKFLAG from '../assets/images/ukFlag.png';
import USAFLAG from '../assets/images/usaFlag.png';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';


function Forms() {

  const { t } = useTranslation();

  return (
    <div className={styles.forms}>

        <Head>
          <title>Diploman - Forms</title>
          <meta
            name='description'
            content='application forms'
          />
        </Head>

      <Link className={styles.forms__link} href='/Usa-application-form'>
        <div className={styles.formsCard}>
            <div className={styles.forms__display}>
                <Image className={styles.forms__img} src={USAFLAG} alt='school logo' />
            </div>
            <h3 className={styles.forms__subhead}>{t('forms_us_application')}</h3>
        </div>
      </Link>

      <Link className={styles.forms__link} href='/Uk-application-form'>
        <div className={styles.formsCard}>
            <div className={styles.forms__display}>
                <Image className={styles.forms__img} src={UKFLAG} alt='school logo' />
            </div>
            <h3 className={styles.forms__subhead}>{t('forms_uk_application')}</h3>
        </div>
      </Link>
    </div>
  )
};


export const getStaticProps = async ({ locale }) => (
  { props: {
    ...(await serverSideTranslations(locale ?? 'en',
      ['common'],
      i18n,
    )),
  } }
);

export default Forms;
