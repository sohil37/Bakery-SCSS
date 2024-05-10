import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './IconButton.module.scss';

function IconButton(props: {
  icon: IconDefinition;
  bgColor: string;
  iconColor: string;
}) {
  return (
    <button className={styles.root} style={{ backgroundColor: props.bgColor }}>
      <FontAwesomeIcon icon={props.icon} style={{ color: props.iconColor }} />
    </button>
  );
}

export default IconButton;
