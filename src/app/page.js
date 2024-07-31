import styles from "./page.module.scss";

import About from "@/components/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <About/>
      
    </main>
  );
}
