import ErrorIcon from '@/assets/close-icon.svg';
import SuccessIcon from '@/assets/success-icon.svg';
import WarningIcon from '@/assets/warning-icon.svg';

import { TAlertBanner } from '../AlertBanner';

const AlertBannerIcon = ({ variant }: Pick<TAlertBanner, 'variant'>) => {
  return variant === 'success' ? (
    <SuccessIcon width={24} height={24} />
  ) : variant === 'warning' ? (
    <WarningIcon width={24} height={24} />
  ) : variant === 'error' ? (
    <ErrorIcon width={24} height={24} />
  ) : null;
};

export default AlertBannerIcon;
