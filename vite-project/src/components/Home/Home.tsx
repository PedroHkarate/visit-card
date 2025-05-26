import styles from "./Home.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.header__conteudo}>
          <h1 className={styles.header__titulo}>Cartão de Visitas Para Devs</h1>
        </section>
      </header>

      <main className={styles.main}>
        <section className={styles.main__conteudo}>
          <div className={styles.main__subtitulo}>
            <h2 className={styles.main_subtitulo__texto}>Encontre e interaja com desenvolvedores</h2>
          </div>
        </section>

        <section className={styles.cardContainer}>
          <ProfileCard
            name="Pedro Henrique"
            role="Dev Frontend"
            avatarUrl="https://avatars.githubusercontent.com/u/83137278?v=4"
            socialLinks={{
              github: "https://github.com/PedroHKarate",
              linkedin: "https://www.linkedin.com/in/pedro-henrique-feliciano-da-silva-a74883274/",
            }}
          />

          <ProfileCard
            name="Maria de Fátima"
            role="Dev Frontend"
            avatarUrl="https://avatars.githubusercontent.com/u/94319702?v=4"
            socialLinks={{
              github: "https://github.com/alvesmariadefatima",
              linkedin: "https://linkedin.com/in/maria-de-fatima-nunes-alves",
            }}
          />
        </section>
      </main>
    </>
  );
};

export default Home;