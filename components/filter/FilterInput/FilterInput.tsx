import { ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import styles from './filterInput.module.css';

import './FilterInput.scss';

const FilterInput = (): ReactElement => (
  <div className={styles.filterInput}>
    <TextField className={styles.textField} fullWidth />
  </div>
);

export default FilterInput;
