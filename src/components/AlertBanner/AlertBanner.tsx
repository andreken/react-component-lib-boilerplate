import AlertBannerIcon from './components/AlertBannerIcon';
import styles from './styles.module.scss';

export type TAlertBanner = {
  variant?: 'success' | 'error' | 'warning';
  title: string;
  message: string;
};

const AlertBanner = ({ variant = 'success', title, message }: TAlertBanner) => {
  return (
    <div className={`${styles.alert} ${styles[variant]}`}>
      <AlertBannerIcon variant={variant} />

      <div className={`${styles.container}`}>
        <span className={`${styles.title}`}>{title}</span>
        <span className={`${styles.description}`}>{message}</span>
      </div>
    </div>
  );
};

export default AlertBanner;
