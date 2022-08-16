import styles from "./styles.module.css";

import logo from "../../assets/logoIgniteTodo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do Ignite TODO" />
    </header>
  );
}
