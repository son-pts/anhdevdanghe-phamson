import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import facebookDark from '../../assets/facebook-dark.svg';
import facebookLight from '../../assets/facebook-light.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import tiktokDark from '../../assets/tiktok-dark.png';
import tiktokLight from '../../assets/tiktok-light.png';
import zaloLight from '../../assets/zalo-light.svg';
import zaloDark from '../../assets/zalo-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const facebookIcon = theme === 'light' ? facebookLight : facebookDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const zaloIcon = theme === 'light' ? zaloLight : zaloDark;
  const tiktokIcon = theme === 'light' ? tiktokLight : tiktokDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Pham Son
        </h1>
        <h2>Frontend Developer</h2> 
        <h2>UI/UX DESIGN</h2>
        <h2>Videographer</h2>
        <h2>Photographer</h2>
        <span>
          <a href="https://www.facebook.com/phamson2k/" target="_blank">
            <img src={facebookIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/dominic-pts" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="tel:+84975934200">
            <img src={zaloIcon} alt="Zalo icon" />
          </a>
          <a href="https://www.tiktok.com/@phamson2j" target="_blank">
            <img src={tiktokIcon} alt="Zalo icon" />
          </a>
        </span>
        <p className={styles.description}>
        Pham Son's Outstanding Projects
A showcase of creative works in video production, photography, and design, highlighting Pham Son's unique style and passion for art.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
