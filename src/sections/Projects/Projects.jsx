import styles from "./ProjectsStyles.module.css";
import { useState } from "react";
import "./TabsStyles.css";

const videoProjects = [
  {
    src: "https://www.youtube.com/embed/govJxyN2b1I",
    title: "Cafe Dốc Thị",
    description: "Videographer",
    link: "https://www.youtube.com/watch?v=govJxyN2b1I",
  },
  {
    src: "https://www.youtube.com/embed/rwgkHtJA5xA",
    title: "Adam Store",
    description: "Video Edit",
    link: "https://www.youtube.com/watch?v=rwgkHtJA5xA",
  },
  {
    src: "https://www.youtube.com/embed/xVvGHyFYS5A",
    title: "Bảo Ngọc",
    description: "Videographer",
    link: "https://www.youtube.com/watch?v=xVvGHyFYS5A",
  },
  {
    src: "https://www.youtube.com/embed/DlZ3HcJjC3I",
    title: "Bổn Mạng SOB",
    description: "Videographer",
    link: "https://www.youtube.com/watch?v=DlZ3HcJjC3I",
  },
];

const imageProjects = [
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "Hipsster",
    description: "Glasses Shop",
  },
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "FitLift",
    description: "Fitness App",
  },
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "Hipsster",
    description: "Glasses Shop",
  },
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "FitLift",
    description: "Fitness App",
  },
];

const codeProjects = [
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "Hipsster",
    description: "Glasses Shop",
  },
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "FitLift",
    description: "Fitness App",
  },
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "Hipsster",
    description: "Glasses Shop",
  },
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "FitLift",
    description: "Fitness App",
  },
];

const designProjects = [
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "Hipsster",
    description: "Glasses Shop",
  },
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "FitLift",
    description: "Fitness App",
  },
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "Hipsster",
    description: "Glasses Shop",
  },
  {
    src: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/anh-co-gai-xinh-dep-66.jpg",
    title: "FitLift",
    description: "Fitness App",
  },
];

const ProjectCard = ({ src, title, description, link }) => (
  <a href={link || "#"} target="_blank" rel="noopener noreferrer">
    <div className="project-card">
      {src.includes("youtube.com") ? (
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          allowFullScreen
          className="responsive-frame"
        ></iframe>
      ) : (
        <img src={src} alt={title} className="responsive-image" />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </a>
);

function Projects() {
  const [activeTab, setActiveTab] = useState("video");
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className="tabs-container">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "video" ? "active" : ""}`}
            onClick={() => setActiveTab("video")}
          >
            Video
          </button>
          <button
            className={`tab-button ${activeTab === "image" ? "active" : ""}`}
            onClick={() => setActiveTab("image")}
          >
            Image
          </button>
          <button
            className={`tab-button ${activeTab === "code" ? "active" : ""}`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </button>
          <button
            className={`tab-button ${activeTab === "design" ? "active" : ""}`}
            onClick={() => setActiveTab("design")}
          >
            Design
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "video" && (
            <div className="content-box">
              <div className={styles.projectsContainer}>
                {videoProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
              <a
                rel="noopener noreferrer"
                className="see_more"
                href="https://www.youtube.com/playlist?list=PLWFOHKZmaOJTpLJAPKcqllZkOGzIaGTbZ"
                target="_blank"
              >
                See more
              </a>
            </div>
          )}
          {activeTab === "image" && (
            <div className="content-box">
              <div className={styles.projectsContainer}>
                {imageProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          )}
          {activeTab === "code" && (
            <div className="content-box">
              <div className={styles.projectsContainer}>
                {codeProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          )}
          {activeTab === "design" && (
            <div className="content-box">
              <div className={styles.projectsContainer}>
                {designProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
