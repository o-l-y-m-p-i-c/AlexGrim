import Link from "next/link";
import styles from "./styles.module.css";

export const Burger = () => {
  return (
    <nav className={styles.nav}>
      <Link href={"#"}>About me</Link>
      <Link href={"#"}>Projects</Link>
      <Link href={"#"}>Contacts</Link>
    </nav>
  );
};
