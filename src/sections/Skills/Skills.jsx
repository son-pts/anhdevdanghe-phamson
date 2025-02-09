import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML - CSS - SCSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Reactjs" />
        <SkillList src={checkMarkIcon} skill="Node" />
        <SkillList src={checkMarkIcon} skill="Git..." />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Capcut" />
        <SkillList src={checkMarkIcon} skill="Premiere" />
        <SkillList src={checkMarkIcon} skill="After Effect" />
        <SkillList src={checkMarkIcon} skill="Davinci Resolve" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Ps" />
        <SkillList src={checkMarkIcon} skill="Ai" />
        <SkillList src={checkMarkIcon} skill="Canva Pro" />
        <SkillList src={checkMarkIcon} skill="Figma" />
      </div>
    </section>
  );
}

export default Skills;
