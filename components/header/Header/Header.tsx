import { memo, ReactElement } from 'react';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';

import styles from './header.module.css';

type HeaderPropsType = {
  onLogoutClick: () => void;
};

const Header = memo(({ onLogoutClick }: HeaderPropsType): ReactElement => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <h2 className={styles.dashboard_name}>{t('header.title')}</h2>
        <div className={styles.header_logoIcon}>
          <img src='/assets/icons/header-icon.png' alt='logo icon' />
        </div>
        <div>
          <IconButton className={styles.logoutIcon} onClick={onLogoutClick}>
            <img src='/assets/icons/logout-icon.png' alt='logout icon' />
          </IconButton>
        </div>
      </div>
    </header>
  );
});

export default Header;

Header.displayName = 'Header';
