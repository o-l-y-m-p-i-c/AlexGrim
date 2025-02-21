import styles from "./styles.module.css";
import globalCSS from "../../containers/global.module.css";
import Link from "next/link";
import { Burger } from "../Burger";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={globalCSS.container}>
        <div className={styles.header_container}>
          <Link className={styles.logo} href="#">
            RenSFX.com
          </Link>

          <Burger />
        </div>
      </div>
    </header>
  );
};
