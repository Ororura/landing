import { AgeSVG, MaleSVG, PlanetSVG } from "@/assets";
import Image from "next/image";
import { FC } from "react";

import styles from "./AboutCard.module.css";

const AboutCard: FC = () => {
  return (
    <div className={styles.cardWrapper}>
      <Image className={styles.image} src={"/profile.jpg"} alt="profile" width={120} height={200} />
      <div className={styles.infoWrapper}>
        <div className={styles.infoCard}>
          <div className={styles.cardIcon}>
            <PlanetSVG />
            <p className={styles.cardParagraph}>Born in:</p>
          </div>
          <p>Russia</p>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.cardIcon}>
            <AgeSVG />
            <p className={styles.cardParagraph}>Age:</p>
          </div>
          <p>19</p>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.cardIcon}>
            <MaleSVG />
            <p className={styles.cardParagraph}>Gender:</p>
          </div>
          <p>Male</p>
        </div>
      </div>
    </div>
  );
};

export { AboutCard };
