import Link from "next/link";

import appBarStyles from "../styles/appbar.module.css";

export const AppBar = () => (
  <div className={appBarStyles.appBar}>
    <span className={appBarStyles.appBarTitle}>
      <Link href="/">AM Newz</Link>
    </span>
    <div className={appBarStyles.appBarNav}>
      <ul className={appBarStyles.navList}>
        <li className={appBarStyles.navListItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={appBarStyles.navListItem}>
          <Link href="/latest">Latest</Link>
        </li>
        <li className={appBarStyles.navListItem}>
          <Link href="/trending">Trending</Link>
        </li>
      </ul>
    </div>
  </div>
);
