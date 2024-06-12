import { FC } from "react";

import { AboutCard } from "@/components/about-card";

import styles from "./AboutWidget.module.css";

const AboutWidget: FC = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.container}>
        <AboutCard />
        <div className={styles.infoWidget}>
          <h2 style={{ textAlign: "center", color: "#3F3F3F" }}>Who am i?</h2>
          <p className={styles.aboutText}>
            I am a software developer with a robust background in various technologies and frameworks. My expertise
            spans Next.js, React, Java, and Spring, allowing me to build dynamic and scalable web applications.
            Additionally, I have experience with Node.js, TypeScript, Docker, Kubernetes, and AWS, which enhances my
            ability to create efficient, cloud-native solutions. I am passionate about continuous learning and staying
            up-to-date with the latest advancements in technology to deliver high-quality software products.
          </p>
        </div>
      </div>
    </div>
  );
};

export { AboutWidget };
