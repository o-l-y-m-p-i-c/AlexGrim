import Link from "next/link";

import globalCSS from "../global.module.css";
import styles from "./styles.module.css";

export const Contacts = () => {
  return (
    <section>
      <div className={globalCSS.container}>
        <div className={globalCSS.vertical_padding}>
          <div className={styles.container}>
            <Link className={styles.logo} href={"#"}>
              RenSFX.com
            </Link>
            <p>
              Transforming Faces, Creating Stories, a n d Making Memories -
              Where Beauty Meets Artistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
