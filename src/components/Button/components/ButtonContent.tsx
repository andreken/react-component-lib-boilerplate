import { TButton } from '../Button';
import styles from '../styles.module.scss';

const ButtonContent = ({ icon, text }: Pick<TButton, 'icon' | 'text'>) => {
  return (
    <div
      className={`${styles.content} ${icon?.position ? styles[icon.position] : ''}`}
    >
      {icon && icon.value}
      {text}
    </div>
  );
};

export default ButtonContent;
