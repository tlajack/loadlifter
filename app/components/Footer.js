import Image from "next/image";
import styles from "./Footer.module.css";

import ara from "../images/ara.svg";
import artba from "../images/ARTBA-logo.png";
import cra from "../images/cra-logo.png";
import lbma from "../images/lbma.jpeg";
import tpi from "../images/TPI_Logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.association}>
        <p>Proud Members of the Following Associations:</p>
        <div className={styles.associationImagesContainer}>
          <a
            href="https://ararental.org/"
            className={styles.associationLinks}
            title="American Rental Association"
          >
            <Image
              src={ara}
              alt="American Rental Association"
              className={styles.associationImages}
            />
          </a>
          <a
            href="https://www.artba.org/"
            className={styles.associationLinks}
            title="American Road & Transportation Builders Association"
          >
            <Image
              src={artba}
              alt="American Road & Transportation Builders Association"
              className={styles.associationImages}
            />
          </a>
          <a
            href="https://crarental.org/"
            className={styles.associationLinks}
            title="Canadian Rental Association"
          >
            <Image
              src={cra}
              alt="Canadian Rental Association"
              className={styles.associationImages}
            />
          </a>
          <a
            href="http://www.lbmao.on.ca/"
            className={styles.associationLinks}
            title="Lumber and Building Materials Association of Ontario"
          >
            <Image
              src={lbma}
              alt="Lumber and Building Materials Association of Ontario"
              className={styles.associationImages}
            />
          </a>
          <a
            href="https://turfgrasssod.org/"
            className={styles.associationLinks}
            title="Turfgrass Producers International "
          >
            <Image
              src={tpi}
              alt="Turfgrass Producers International "
              className={styles.associationImages}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
