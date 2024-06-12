import Image from "next/image";
import { FC, PropsWithChildren } from "react";

import styles from "./Header.module.css";

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <p>Ororura</p>
          <div className={styles.linksContainer}>
            <div className={styles.links}>
              <Image src={"./manual.svg"} alt={"manual"} width={27} height={27} />
              <p className={styles.linksParagraph}>About</p>
            </div>
            <div className={styles.links}>
              <Image src={"./project.svg"} alt={"project"} width={27} height={27} />
              <p className={styles.linksParagraph}>Projects</p>
            </div>
            <div className={styles.links}>
              <Image src={"./contact.svg"} alt={"contact"} width={27} height={27} />
              <p className={styles.linksParagraph}>Contact</p>
            </div>
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export { Header };
