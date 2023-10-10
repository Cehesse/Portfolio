//REACT
import { useParams , Navigate } from "react-router-dom";

//API
import callAPI from "../../api"
var datas = await callAPI("projets.json")

//COMPONENTS
import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";


function Projet() {

  let idProject= useParams().Number;
  const data = datas.find(data => data.id === idProject);
  if (data === undefined) {return(<Navigate to="/Erreur" /> )}

  return (
      <main className="projet-page pages">
          <Carousel slides={data.pictures} />
        <section className="section-description">
          <div>
            <div className="section_description_info">
            <h2 className="section_description_title">{data.title}</h2>
          </div>
          <div className="section_description_links">
              {data.links.map((links, index) => {
                return (<button key={index}>{links}</button>)
                })}
          </div>
            <div className="section_description_collapse">
              <Collapse title={"Description"} text={data.description} />
            </div>
            <div className="section_description_collapse">
              <Collapse title={"Technologie"} text={data.technology} />
            </div>
          </div>
        </section>   
      </main> 
  )
}

  export default Projet