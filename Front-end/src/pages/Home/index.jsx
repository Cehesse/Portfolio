import { Link } from "react-router-dom";
import Masonry from 'react-masonry-css';
import { useEffect, useState } from 'react';

import Card from "../../components/Card";
import Form from "../../components/Form";
import callAPI from "../../api";
import profil from "../../assets/img/profil.webp";

function Home() {
  const breakpointColumnsObj = {
    default: 3,
    1023.98: 2,
    767.98: 1,
  };

  const [datas, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      var datas = await callAPI("projects.json");
      setData(datas);
    }

    fetchData();
  }, []);

  if (datas === null) {
    return <main>Loading...</main>;
  }

  return (
    <main className="home-page pages">
      <section id="about-section" className="about-section" aria-label="Section Présentation">
        <h2 className="home-page_section-title">Présentation</h2>
        <div className="about-section_content">
          <img
            className="about-section_image"
            src={profil}
            alt="Mon portrait"
            title="Mon portrait"
            aria-label="Portrait de l'auteur"
          />
          <div className="about-section_description">
            <p className="about-section_text">
              Je suis un développeur en reconversion, passionné par les technologies web. J'ai suivi une formation sur
              Openclassrooms, je me suis lancé dans des projets concrets pour mettre en pratique mes compétences. Mon
              portfolio reflète mon parcours et mes projets.
            </p>
            <Link to={`/About`} title="Page de présentation" aria-label="En savoir plus sur mon parcours">
              <h3 className="about-section_link">Mon parcours</h3>
            </Link>
          </div>
        </div>
      </section>
      <section id="projects-section" className="projects-section" aria-label="Section Projets">
        <h2 className="home-page_section-title">Projets</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          aria-label="Liste de projets">
          {datas.map(data => {
            return (
              <Card
                key={data.id}
                id={data.id}
                title={data.title}
                text={data.text}
                img={data.cover}
              />
            );
          })}
        </Masonry>
      </section>
      <section id="contact-section" className="contact-section" aria-label="Section Contact">
        <h2 className="home-page_section-title">Contact</h2>
        <Form></Form>
      </section>
    </main>
  );
}

export default Home;
