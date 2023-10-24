//REACT
import { Link } from "react-router-dom"
import Masonry from 'react-masonry-css'
import { useEffect, useState } from 'react';

//COMPONENTS
import Card from "../../components/Card"
import Form from "../../components/Form"

//API
import callAPI from "../../api"

//IMG
import profil from "../../assets/img/profil.webp"

//FCT
function Home() {

  const breakpointColumnsObj = {
    default: 3,
    1023.98: 2,
    767.98: 1,
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
            <div className="about-section_content">
                <img className="about-section_image" src={profil} alt="Votre Portrait" />
                <div className="about-section_description">
                  <p className="about-section_text">Je suis un développeur en reconversion, passionné par les technologies web. J'ai suivi une formation sur Openclassroom, je me suis lancé dans des projets concrets pour mettre en pratique mes compétences. Mon portfolio reflète mon parcours et mes projets.</p>
                  <Link to={`/About`}>
                  <h3 className="about-section_link">Mon parcours</h3>
                  </Link>
                </div>
            </div>
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