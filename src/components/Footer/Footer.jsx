import {} from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = ({
  dockFooteRef,
  dockFooter,
  dockFooterTop,
  dockFooterBottom,
}) => {
  return (
    <div ref={dockFooteRef} className={styles.footer}>
      Footer!!!!!
      <Link to="services">services</Link>
      {dockFooter === "column" ? (
        <button onClick={dockFooterTop}>dockFooterTop</button>
      ) : (
        <button onClick={dockFooterBottom}> dockFooterBottom</button>
      )}
    </div>
  );
};

export default Footer;
