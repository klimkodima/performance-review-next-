import { ReactElement, memo } from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import { FilterList } from '../FilterList';

import { FilterType } from '../types';

import styles from  './filter.module.css';

type FilterPropsType = {
  teamFilter: FilterType[];
  levelFilter: FilterType[];
  auditorFilter: FilterType[];
};

const Filter = memo(
  ({
    levelFilter,
    teamFilter,
    auditorFilter
  }: FilterPropsType): ReactElement => {
    const { t } = useTranslation('common', {
      keyPrefix: 'filter'
    });
    return (
      <div className={styles.filter}>
        <div className={styles.filter__wrapper}>
          <div className={styles.filter__header}>
            <h3 className={styles.filter__title}>{t('FILTERS')}</h3>
            <Button className={styles.clear__button}>{t('CLEAR ALL')}</Button>
          </div>
          <div>
            <FilterList title={t('TEAM')} filter={teamFilter} />
            <FilterList title={t('LEVEL')} filter={levelFilter} />
            <FilterList title={t('AUDITOR')} filter={auditorFilter} />
          </div>
        </div>
      </div>
    );
  }
);

export default Filter;

Filter.displayName = 'Filter';
