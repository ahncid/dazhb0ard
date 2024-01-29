"use client";
import Image from "next/image";
import styles from "./boilerbox.module.css";

const BoilerBox = ({ authors }) => {
  console.log("authors: ", authors);
  return (
    <div className={styles.boilerbox}>
      <Image src={"/logo.png"} alt="MCDM Logo" width={232} height={195} />
      <div>
        <h1>React / NextJS</h1>
        <p>Dashboard</p>
        <p>Antal portfolios: {authors.length}</p>
      </div>
    </div>
  );
};

export default BoilerBox;
