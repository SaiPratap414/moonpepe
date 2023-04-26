import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import { useRouter } from "next/router";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  outline?: boolean;
  href?: string;
}

export default function Button(props: ButtonProps) {
  const router = useRouter();

  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    } else if (props.href) {
      router.push(props.href);
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={props.disabled}
      className={classNames(styles.primaryButton, props.className, {
        [styles.outline]: props.outline,
        [styles.filled]: !props.outline,
      })}
    >
      <span>{props.children}</span>
    </button>
  );
}
