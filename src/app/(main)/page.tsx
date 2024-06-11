import { AboutWidget } from "@/components/about-widget";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutWidget />
    </main>
  );
}
