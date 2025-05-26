import { FaGithub, FaLinkedin } from "react-icons/fa";
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
            <span className={styles["profile-icon"]}>
              <FaGithub size={20} />
            </span>
          </a>
        )}
        {socialLinks.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <span className={styles["profile-icon"]}>
              <FaLinkedin size={20} />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;