import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="https://www.youtube.com/embed/KHqTWHC2qsA"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src="https://www.youtube.com/embed/eh_Np_LiQTY"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src="https://www.youtube.com/embed/eh_Np_LiQTY"
          link="https://www.youtube.com/watch?v=KHqTWHC2qsA"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src="https://www.youtube.com/embed/eh_Np_LiQTY"
          link="https://www.youtube.com/watch?v=KHqTWHC2qsA"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
