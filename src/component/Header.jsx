import siteLog from "../img/siteLogoNew.png";
import styles from "./header.module.css";

export default function Header() {
  const addNewEp = () => {
    console.log("new employee added...");
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.leftLogoCol}>
          <div className={styles.logoBox}>
            <img src={siteLog} alt="My Employee Logo" />
          </div>
        </div>
        <div className={styles.rightLogoCol}>
          <div className={styles.menuBox}>
            <ul className={styles.navBar}>
              <li className={styles.menuItem}>About Us</li>
              <li className={styles.menuItem}>Services</li>
              <li className={styles.menuItem}>Contact Us</li>
              <li className={styles.menuItem}>
                <button onClick={addNewEp} className={styles.addBtn}>
                  Add Employee
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
