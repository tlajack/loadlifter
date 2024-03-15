import Image from "next/image";
import Appbar from "../components/Appbar"
import LoadLifterRTF from "../images/loadlifter-rtf.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      {/* <ul>
        <li>Home</li>
        <ul>
          <li>Mission</li>
          <li>Catalogue</li>
          <li>Support</li>
          <li>Contact</li>
          <li>Emploment Opportunity</li>
        </ul>
          <li>Products</li>
            <ul>
              <li>22-2400 Series</li>
              <li>4400 Series</li>
              <li>Laborer</li>
              <li>Agri Lifter</li>
              <li>Reach</li>
              <li>Special Attachments</li>
            </ul>
          <li>Dealer Login</li>
      </ul> */}
      <Appbar />
    </div>
  );
}

export default Header;
