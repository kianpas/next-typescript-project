import Link from "next/link";
import { Fragment, useState } from "react";
import classes from "@/styles/NavBar.module.scss";

const NavBar = (props: any) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>Reindeer</div>
        <nav>
          <ul>
            <li>
              <Link href="#">HOME</Link>
            </li>
            <li>
              <Link href="#about">ABOUT</Link>
            </li>
            <li>
              <Link href="/project">PROJECT</Link>
            </li>
            <li>
              <Link href="/roadmap">ROAD MAP</Link>
            </li>
            {/* <li>
              <Link href="/hobby">HOBBY</Link>
            </li> */}
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavBar;
