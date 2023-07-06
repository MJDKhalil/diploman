import { IconButton, Collapse  } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '../styles/WelcomePageHeader.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { useTranslation } from 'next-i18next';


function WelcomePageHeader() {

  const { t } = useTranslation()


    const [checked, setChecked] = useState(false);
    useEffect(() => {
    setChecked(true);
    }, []);

  return (
    <div className={styles.welcomePageHeader} id='headerEmo'>
        <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedheight={50}
        >
        <div className={styles.welcome__box}>
          <h1 className={styles.welcome__title}>
          {t('welcome_title')}<br />{t('welcome_titleMid')}
            <span className={styles.welcome__second__title}>{t('welcome_titleEnd')}</span>
          </h1>
          
          <Scroll offset={-100} to='services' smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={styles.go__down} />
            </IconButton>
          </Scroll>
        </div>
        </Collapse>
    </div>
  )
}

export default WelcomePageHeader;