import Image from "next/image";
import React from "react";
import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/breathless.png"
        width={250}
        height={380}
        priority
        alt="logo breathless"
      />
    </div>
  );
};

export default Logo;
