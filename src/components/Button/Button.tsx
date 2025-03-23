import { ReactElement } from 'react';

import ButtonContent from './components/ButtonContent';
import styles from './styles.module.scss';

export type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  cta?: { href: string; target?: '_blank' | '_parent' | '_self' | 'top' };
  icon?: { position: 'left' | 'right'; value: ReactElement };
  variant?: 'primary' | 'secondary' | 'ghost';
  text: string;
};

const Button = ({
  cta,
  icon,
  variant = 'primary',
  text,
  ...props
}: TButton) => {
  const { disabled, ...restProps } = props;

  const className = `${styles.btn} ${styles[variant]} ${disabled ? styles.disabled : ''}`;
  const Content = <ButtonContent icon={icon} text={text} />;

  return cta ? (
    <a className={className} href={cta.href} target={cta.target || '_self'}>
      {Content}
    </a>
  ) : (
    <button className={className} {...restProps}>
      {Content}
    </button>
  );
};

export default Button;
