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
    default: 5,
    1769.98: 4,
    1569.98: 3,
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

  //console.log(datas)

  if (datas === null) {
    return <main>Loading...</main>;
  }

  return (
        <main className="home-page pages">
          <section id="about-section" className="about-section" >
            <Link to={`/About`}>
              <h2 className="about-section_title">Lien About page</h2>
            </Link>
          </section>
          <section id="projects-section" className="projects-section" >
            <h2 className="projects-section_title">Projets</h2>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {datas.map(data => {return (<Card key={data.id} id={data.id} title={data.title} text={data.text} img={data.cover} />)})}
            </Masonry>
          </section>
          <section id="contact-section" className="contact-section" >
            <h2 className="contact-section_title">Contact</h2>
            <Form></Form>
          </section>
        </main> 
    )
  }
  export default Home