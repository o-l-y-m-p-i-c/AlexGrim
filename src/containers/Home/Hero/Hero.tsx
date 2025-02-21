import { Button } from "@/components/Button";
import globalCSS from "../../global.module.css";
import styles from "./styles.module.css";

export const Hero = () => {
  return (
    <section>
      <div className={styles.hero}>
        <div className={globalCSS.container}>
          <div className={styles.hero_inner}>
            <div className={styles.content}>
              <h1>
                <span className="--accented">I</span> am Renate Jujukina.
              </h1>
              <p>Welcome to my portfolio</p>
              <div className={styles.button_wrap}>
                <Button href="#">See All projects</Button>
              </div>
            </div>
            <div className={styles.background}>
              <div className={styles.glitch}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
