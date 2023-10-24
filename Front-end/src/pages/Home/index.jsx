//REACT
import { Link } from "react-router-dom"
import Masonry from 'react-masonry-css'
import { useEffect, useState } from 'react';

//COMPONENTS
import Card from "../../components/Card"
import Form from "../../components/Form"

//API
import callAPI from "../../api"

//FCT
function Home() {

  const breakpointColumnsObj = {
    default: 3,
    1769.98: 3,
    1569.98: 2,
    1349.98: 2,
    1039.98: 1,
    699.98: 1,
  };

  const [datas, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      var datas = await callAPI("projects.json")
      setData(datas);
    }

    fetchData();
  }, []);


  if (datas === null) {
    return <main>Loading...</main>;
  }

  return (
        <main className="home-page pages">
          <section id="about-section" className="about-section" >
          <h2 className="home-page_section-title">Présentation</h2>
            <div className="about-section__content">
                <img className="about-section__image" src="lien_de_votre_photo_portrait.jpg" alt="Votre Portrait" />
                <p className="about-section__text">Je suis un nouveau développeur en reconversion passionné les technologies web. J'ai suivi une formation sur Openclassroom, je me suis lancé dans des projets concrets pour mettre en pratique mes compétences. Mon portfolio reflète mon parcours et mes projets. Explorez mes réalisations dans la section projets ou mon parcours.</p>
            </div>
            <Link to={`/About`}>
              <p className="about-section__link">Mon parcours</p>
            </Link>
          </section>
          <section id="projects-section" className="projects-section" >
            <h2 className="home-page_section-title">Projets</h2>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {datas.map(data => {return (<Card key={data.id} id={data.id} title={data.title} text={data.text} img={data.cover} />)})}
            </Masonry>
          </section>
          <section id="contact-section" className="contact-section" >
            <h2 className="home-page_section-title">Contact</h2>
            <Form></Form>
          </section>
        </main> 
    )
  }
  export default Home