import { useEffect, useRef, useState } from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const VALID_DOCKS = ["column", "column-reverse"];

const Layout = () => {
  const dockContainer = useRef(null);
  const dockFooteRef = useRef(null);

  const getDock = () => {
    try {
      let dock = localStorage.getItem("dock");
      if (dock) {
        dock = JSON.parse(dock);
        if (VALID_DOCKS.includes(dock.footer)) return dock;
        return { content: "column", footer: "column" };
      } else {
        return { content: "column", footer: "column" };
      }
    } catch (error) {
      return { content: "column", footer: "column" };
    }
  };
  const [dockFooter, setDockFooter] = useState(getDock);

  useEffect(() => {
    dockContainer.current.style.setProperty(
      "--main-container-reverse",
      dockFooter.footer
    );
    localStorage.setItem("dock", JSON.stringify(dockFooter));
  }, [dockFooter]);

  const dockFooterTop = () => {
    setDockFooter((d) => ({ ...d, footer: "column-reverse" }));
  };
  const dockFooterBottom = () => {
    setDockFooter((d) => ({ ...d, footer: "column" }));
  };

  return (
    <div ref={dockContainer} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left_container}>
          L Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          ratione amet neque! lorem1234
        </div>
        <div className={styles.main_container}>
          <div className={styles.main_container_header}>
            <Header />
          </div>
          <div className={styles.main_container_outlet}>
            <Outlet />
          </div>
        </div>
        <div className={styles.right_container}>R</div>
      </div>
      <Footer
        dockFooteRef={dockFooteRef}
        dockFooterTop={dockFooterTop}
        dockFooterBottom={dockFooterBottom}
        dockFooter={dockFooter.footer}
      />
    </div>
  );
};

export default Layout;
