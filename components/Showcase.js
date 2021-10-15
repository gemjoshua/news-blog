import styles from "../styles/home.module.css";
import Link from "next/link";

export default function Showcase() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <Link href="/" className={styles.title}>
          AM NEWS
        </Link>
        BLOG
      </h1>
      <h4 className={styles.description}>All News At Your Finger Tips</h4>
    </main>
  );
}
