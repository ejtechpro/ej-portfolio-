import {} from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"

const Header = ({ dockLeftFirst, dockMainFirst, dockRightFirst }) => {
  return (
    <div className={styles.header}>
      <li onClick={dockLeftFirst}>left</li>
      <li onClick={dockMainFirst}>center</li>
      <li onClick={dockRightFirst}>right</li>
      <li onClick={dockRightFirst}>theme</li>
    </div>
  );
};

export default Header;
