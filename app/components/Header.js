import Image from "next/image";
import LoadLifterRTF from "../images/loadlifter-rtf.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <Image
        src={LoadLifterRTF}
        alt="Load Lifter logo"
        className={styles.logo}
      />
    </div>
  );
}

export default Header;
