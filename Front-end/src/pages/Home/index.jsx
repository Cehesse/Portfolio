//REACT
import { Link } from "react-router-dom"
import Masonry from 'react-masonry-css'

//COMPONENTS
import Card from "../../components/Card"

//API
import callAPI from "../../api"
var datas = await callAPI("projets.json")


//FCT
function Home() {

  const breakpointColumnsObj = {
    default: 6,
    1769.98: 5,
    1569.98: 4,
    1349.98: 3,
    1039.98: 2,
    699.98: 1,
  };

    return (
        <main className="home-page pages">
          <section id="about-section" className="about-section" >
            <Link to={`/About`}>
              <h2 className="about-section_title">Lien About page</h2>
            </Link>
          </section>
          <section id="project-section" className="project-section" >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {datas.map(data => {return (<Card key={data.id} id={data.id} title={data.title} img={data.cover} />)})}
            </Masonry>
          </section>
          <section id="contact-section" className="contact-section" >
            <h2 className="contact-section_title">Contact</h2>
          </section>
        </main> 
    )
  }

  export default Home