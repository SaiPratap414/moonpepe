import React from "react";
import assets from "@/assets";
import Image from "next/image";
import styles from "./Social.module.scss";
import Link from "next/link";

export default function Social() {
  return (
    <div className={styles.socialBar}>
      <Link href="https://twitter.com/moonpepe_xyz" target="_blank">
        <Image src={assets.twitter} height={30} width={30} alt="Twitter" />
      </Link>
      <Link href="https://t.me/moonpepearb" target="_blank">
        <Image src={assets.telegram} height={30} width={30} alt="Telegram" />
      </Link>
      <Link href="https://arbiscan.io/token/0xCe0B3F1258189Da17BBd8c7E0509f5f7E001a998" target="_blank">
        <Image src={assets.etherscan} height={30} width={30} alt="Arbiscan" className={styles.bg} />
      </Link>
    </div>
  );
}
