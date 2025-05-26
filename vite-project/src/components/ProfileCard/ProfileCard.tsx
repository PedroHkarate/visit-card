import { FaGithub, FaLinkedin } from "react-icons/fa"; // ← Aqui está a importação dos ícones
import styles from "../ProfileCard/ProfileCard.module.css";

type SocialLinks = {
  github?: string;
  linkedin?: string;
};

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  socialLinks?: SocialLinks;
};

const ProfileCard = ({ name, role, avatarUrl, socialLinks = {} }: ProfileCardProps) => {
  return (
    <div className={styles["profile-card"]}>
      <h2 className={styles["profile-name"]}>{name}</h2>
      <img src={avatarUrl} alt={`${name} profile`} className={styles["profile-avatar"]} />
      <p className={styles["profile-role"]}>{role}</p>

      <div className={styles["profile-socials"]}>
        {socialLinks.github && (
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className={styles["profile-icon"]} />
          </a>
        )}
        {socialLinks.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className={styles["profile-icon"]} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;           
