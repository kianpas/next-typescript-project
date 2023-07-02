import Link from "next/link";
import { Fragment, useState } from "react";
import classes from "@/styles/NavBar.module.scss";

const NavBar = (props: { sideMenu: boolean }) => {
  return (
    <Fragment>
      <header
        className={
          props.sideMenu
            ? `${classes.header} ${classes.toggle}`
            : `${classes.header}`
        }
      >
        <div className={classes.logo}></div>
        <nav>
          <ul>
            <li>
              <Link href="#">HOME</Link>
            </li>
            <li>
              <Link href="#about">ABOUT</Link>
            </li>
            <li>
              <Link href="#experience">EXPERIENCE</Link>
            </li>
            <li>
              <Link href="#project">PROJECT</Link>
            </li>
            <li>
              <Link href="#contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavBar;
