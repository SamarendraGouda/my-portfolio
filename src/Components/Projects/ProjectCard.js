import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.projectImage}>
        <img src={props.image} alt="project" />
      </div>
      <div className={styles.projectCard}>
        <div className={styles.projectName}>{props.name}</div>
        <div className={styles.projectDescription}>{props.description}</div>
        <div className={styles.projectLinks}>
          <a href={props.githubLink} target="_blank" rel="noreferrer">
            <div className={styles.projectLink}>Github</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
