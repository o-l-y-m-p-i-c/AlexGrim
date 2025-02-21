"use client";

import globalCSS from "../../global.module.css";
import styles from "./styles.module.css";
import { CollageCard } from "./CollageCard";
import { AccentedSpan } from "@/components/AccentedSpan";

export const Collage = ({
  columns = 3,
  span,
  title,
  items = [],
}: {
  span?: string;
  title?: string;
  columns?: number;
  items: {
    src: string;
    alt: string;
  }[];
}) => {
  console.log(new Array(columns));
  return (
    <section>
      <div className={globalCSS.container}>
        <div className={globalCSS.vertical_padding}>
          <div className={styles.container}>
            <div className={styles.container_content}>
              {span && <AccentedSpan label={span} />}
              {title && (
                <div className="">
                  <h2>{title}</h2>
                </div>
              )}
            </div>
            <div
              className={styles.grid_container}
              style={{
                gridTemplateColumns: Array.from(
                  { length: columns },
                  () => "1fr"
                ).join(" "),
              }}
            >
              {items.map((item, index) => (
                <CollageCard key={`collage-${index}`} image={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
