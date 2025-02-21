import Link from "next/link";
import styles from "./styles.module.css";
import { ReactNode } from "react";

export const Button = ({
  children,
  variant = "outlined",
  href,
  onClick,
}: {
  variant?: "outlined" | "contained";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}) => {
  if (href) {
    return (
      <Link
        className={`${styles.button} ${styles[variant]}`}
        href={href}
        target={"_blank"}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};
