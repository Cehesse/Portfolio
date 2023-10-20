//REACT
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

//API
import callAPI from "../../api"

//COMPONENTS
import Carousel from "../../components/Carousel";

function Project() {
  const idProject = useParams().Number;
  const navigate = useNavigate();
  const [projectdata, setData] = useState(null);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const projects = await callAPI("projects.json");
      const project = projects.find(data => data.id === idProject);
      setProjectCount(projects.length);
      setData(project);
    }

    fetchData();
  }, [idProject]);

  const goToNextProject = () => {
    const nextId = parseInt(idProject, 10) + 1;
    if (nextId > projectCount) {
      navigate(`/Projects/1`);
    } else {
      navigate(`/Projects/${nextId}`);
    }
  };

  const goToPreviousProject = () => {
    const previousId = parseInt(idProject, 10) - 1;
    if (previousId >= 1) {
      navigate(`/Projects/${previousId}`);
    } else {
      navigate(`/Projects/${projectCount}`);
    }
  };

  if (projectdata === null) {
    return <main>Loading...</main>;
  }

  if (projectdata === undefined) {
    return <Navigate to="/Erreur" />;
  }

  return (
    <main className="project-page pages">
      <section className="project-section">
      <div className="project-section_project">
        <div className="project-section_carousel">
          <Carousel slides={projectdata.pictures} />
        </div>
        <div className="project-section_description">
              <h2 className="project-section_title">{projectdata.title}</h2>
              <p className="project-section_text">{projectdata.description}</p>
              <div className="project-section_technologys">
                {projectdata.technologys.map((technologys, index) => {
                  return (<img src={technologys} className="project-section_technology" key={index}></img>)
                  })}
              </div>
              <div className="project-section_links">
              {projectdata.site !== "" && (
                <a href={projectdata.site} target="_blank" rel="noreferrer">
                  <button className="project-section_link project-section_link--ext" >Site</button>
                </a>
              )}
              {projectdata.github !== "" && (
                    <a href={projectdata.github} target="_blank" rel="noreferrer">
                      <button className="project-section_link project-section_link--ext">Github</button>
                     </a>
                )}
              </div>
        </div>
      </div>
      <div className='project-section_nav'>
        <ul className='project-section_links'>
          <li>
            <button className='project-section_link project-section_link--nav' onClick={goToPreviousProject}>Projet précédent</button>
          </li>      
          <li>
            <button className=' project-section_link project-section_link--nav' onClick={goToNextProject}>Projet suivant</button>
          </li>
        </ul>
      </div> 
      </section>   
    </main> 
  )
}

export default Project;
