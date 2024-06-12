import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { ContactSVG, LogoSVG, ManualSVG, ProjectSVG } from "@/assets";

import styles from "./Header.module.css";

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.linksWrapper}>
            <LogoSVG style={{ marginRight: "10px" }} />
            <p>Ororura</p>
          </div>
          <div className={styles.linksContainer}>
            <Link className={styles.links} href={"/"}>
              <div className={styles.linksWrapper}>
                <ManualSVG />
                <p>About</p>
              </div>
            </Link>
            <Link href={"/projects"} className={styles.links}>
              <div className={styles.linksWrapper}>
                <ProjectSVG />
                <p>Projects</p>
              </div>
            </Link>
            <Link href={"/contact"} className={styles.links}>
              <div className={styles.linksWrapper}>
                <ContactSVG />
                <p>Contact</p>
              </div>
            </Link>
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export { Header };
