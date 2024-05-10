import styles from './Button.module.scss';

function Button(props: { text: string }) {
  return <button className={styles.root}>{props.text}</button>;
}

export default Button;
