import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/Carousel";
import catalogue from "./images/catalogue.jpg";

export default function Home() {
  return (
    <div className={styles.main}>
      <Carousel />
      <section className={styles.section}>
        <h1>WELCOME TO LOAD LIFTER</h1>
        <p>
          Whether you’re in construction, mining, agriculture, lumber, forestry,
          government, utilities, or any other industrial business, Load Lifter
          designs and manufactures rough terrain forklifts for the most
          challenging environments. For more information, please browse through
          our site and view the different models in our line. Thank you for
          visiting, we look forward to hearing from you soon.
        </p>
        <p>
          Are you an authorized dealer?{" "}
          <a href="mailto:info@load-liftermfg.com">Contact us</a> if you do not
          have your login info.
        </p>
        <h2>Download our catalogue</h2>
        <a
          href="/LoadLifter-Catalogue.pdf"
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
        >
          <Image
            src={catalogue}
            alt="catalogue download"
            className={styles.catalogue}
          />
        </a>
      </section>
    </div>
  );
}
