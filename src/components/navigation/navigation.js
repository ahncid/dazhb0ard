"use client";
import Link from "next/link";
import styles from "./navigation.module.css";
import Image from "next/image";
import DevAssignmentsNavBtn from "../dev/devAssignmentsNavigation/devAssignmentsNavBtn/devAssignmentsNavBtn";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Navigation = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={"/logo.png"}
              width={40}
              height={40}
              alt={"logo"}
            ></Image>
          </Link>
        </div>
        <div>NAVIGATION</div>
        <div className={`${styles.artists} ${isActive ? styles.active : ""}`}>
          {" "}
          <DevAssignmentsNavBtn
            link={"/lena-jespersen"}
            title={"Lena Jespersen"}
          />
          <DevAssignmentsNavBtn link={"/lena-riis"} title={"Lena Riis"} />
          <DevAssignmentsNavBtn
            link={"/mikkel-schwitzer"}
            title={"Mikkel Schwitzer"}
          />
          <DevAssignmentsNavBtn link={"/pia-stoerup"} title={"Pia Stoerup"} />
          <DevAssignmentsNavBtn link={"/tina-rosing"} title={"Tina Rosing"} />
        </div>

        <FontAwesomeIcon
          className={`${styles.faBars} ${isActive ? styles.active : ""}`}
          icon={faBars}
          onClick={handleToggle}
        />
      </div>
    </div>
  );
};

export default Navigation;
