import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { useState, useEffect } from "react";

const Layout = (props) => {
  const [sideMenu, setSideMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const menuHandler = () => {
    setSideMenu(true);

    if (sideMenu) {
      setSideMenu(false);
    }
  };

  const backDropHandler = () => {
    setSideMenu(false);
  };

  return (
    mounted && (
      <div className={classes.layout}>
        <MainNavigation sideMenu={sideMenu} />
        {!sideMenu ? (
          <div className={classes.icon}>
            <i className="bx bx-menu" onClick={menuHandler}></i>
          </div>
        ) : (
          ""
        )}
        {sideMenu && (
          <div className={classes.backdrop} onClick={backDropHandler}></div>
        )}
        <main className={classes.main}>{props.children}</main>
      </div>
    )
  );
};

export default Layout;
