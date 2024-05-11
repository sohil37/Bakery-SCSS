import styles from "./TransparentButton.module.scss";

function TransparentButton(props: { children: JSX.Element }) {
  return <button className={styles.root}>{props.children}</button>;
}

export default TransparentButton;
