import Image from "next/image";

import styles from "./styles.module.css";

export const CollageCard = ({
  image,
}: {
  image: {
    src: string;
    alt: string;
  };
}) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image_wrap}>
          <Image
            fill
            className={styles.card_image}
            src={image.src}
            alt={image.alt}
          />
        </div>
      </div>
    </>
  );
};
