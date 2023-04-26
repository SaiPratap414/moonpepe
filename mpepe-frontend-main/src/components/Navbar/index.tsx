import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// styles
import classNames from "classnames";
import styles from "./Navbar.module.scss";
import assets from "@/assets";
import useSwitch from "@/hooks/useSwitch";

export default function Navbar() {
  const isMobileNavbarOpen = useSwitch();
  const showBackground = useSwitch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        showBackground.on();
      } else {
        showBackground.off();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        isMobileNavbarOpen.off();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={classNames(styles.navbar, (isMobileNavbarOpen.value || showBackground.value) && styles.open)}>
        <Link href="#home">home</Link>
        <Link href="#about">about</Link>
        <Image src={assets.logo} alt="Flux by Astro Logo" className={styles.logo} />
        <Link href="#howtobuy">how to buy</Link>
        <Link href="#tokenomics">tokenomics</Link>
        <HambugerIcon open={isMobileNavbarOpen.value} onClick={isMobileNavbarOpen.toggle} />
      </div>
      <div className={classNames(styles.mobileNavbar, isMobileNavbarOpen.value && styles.open)}>
        <Link onClick={isMobileNavbarOpen.off} href="#home">
          home
        </Link>
        <Link onClick={isMobileNavbarOpen.off} href="#about">
          about
        </Link>
        <Link onClick={isMobileNavbarOpen.off} href="#howtobuy">
          how to buy
        </Link>
        <Link onClick={isMobileNavbarOpen.off} href="#tokenomics">
          tokenomics
        </Link>
        <Link onClick={isMobileNavbarOpen.off} href="#contact">
          contact
        </Link>
      </div>
    </>
  );
}

interface HambugerIconProps {
  onClick: () => void;
  open: boolean;
}

const HambugerIcon = (props: HambugerIconProps) => {
  return (
    <div className={classNames(styles.hamburgerIcon, props.open && styles.open)} onClick={props.onClick}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};
