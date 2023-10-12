//REACT
import { useParams , Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';

//API
import callAPI from "../../api"

//COMPONENTS
import Carousel from "../../components/Carousel";

function Project() {

  let idProject= useParams().Number;
  const [projectnum, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      var projectnum = await callAPI("projects.json")
      projectnum = projectnum.find(data => data.id === idProject);
      setData(projectnum);
    }

    fetchData();
  }, [idProject]);

  if (projectnum === null) {
    return <div>Loading...</div>;
  }

  if (projectnum === undefined) {return(<Navigate to="/Erreur" /> )}

  return (
      <main className="project-page pages">
          
        <section className="project-section">
          <div>
            <Carousel slides={projectnum.pictures} />
          </div>
          <div className="project-section_description">
            <h2 className="project-section_title">{projectnum.title}</h2>
            <p className="project-section_text">{projectnum.description}</p>
            <div className="project-section_technologys">
              {projectnum.technologys.map((technologys, index) => {
                return (<p className="project-section_technology" key={index}>{technologys}</p>)
                })}
            </div>
                      <div className="project-section_links">
              {projectnum.links.map((links, index) => {
                return (<button className="project-section_link" key={index}>{links}</button>)
                })}
            </div>
          </div>
          
        </section>   
      </main> 
  )
}

  export default Project