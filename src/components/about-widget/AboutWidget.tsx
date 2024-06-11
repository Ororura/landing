import { FC } from "react";

import styles from "./AboutWidget.module.css";

const AboutWidget: FC = () => {
  return (
    <div className={styles.aboutWrapper}>
      <p>About</p>
    </div>
  );
};

export { AboutWidget };
