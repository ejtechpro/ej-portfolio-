import {} from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.left_container}>
          L Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          ratione amet neque! lorem1234
        </div>
        <div className={styles.main_container}>
          <div className={styles.main_container_header}>Header</div>
          <div className={styles.main_container_outlet}>
            <Outlet />
 
          </div>
        </div>
        <div className={styles.right_container}>R</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
