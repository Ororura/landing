import { FC, PropsWithChildren } from "react";

import styles from "./Header.module.css";

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <p>Ororura</p>
          <div className={styles.linksContainer}>
            <p className={styles.linksParagraph}>About</p>
            <p className={styles.linksParagraph}>Projects</p>
            <p className={styles.linksParagraph}>Contact</p>
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export { Header };
