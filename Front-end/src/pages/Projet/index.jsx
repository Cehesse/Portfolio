//REACT
import { useParams , Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';

//API
import callAPI from "../../api"

//COMPONENTS
import Carousel from "../../components/Carousel";

function Projet() {

  let idProject= useParams().Number;
  const [data2, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      var data2 = await callAPI("projets.json")
      data2 = data2.find(data => data.id === idProject);
      setData(data2);
    }

    fetchData();
  }, [idProject]);

  if (data2 === null) {
    return <div>Loading...</div>;
  }

  if (data2 === undefined) {return(<Navigate to="/Erreur" /> )}

  return (
      <main className="projet-page pages">
          <Carousel slides={data2.pictures} />
        <section className="section-description">
          <div>
            <div className="section_description_info">
            <h2 className="section_description_title">{data2.title}</h2>
          </div>
          <div className="section_description_links">
              {data2.links.map((links, index) => {
                return (<button key={index}>{links}</button>)
                })}
          </div>
              <p className="section_description_text">{data2.description}</p>
              <p className="section_description_text"> {data2.technology}</p>
          </div>
        </section>   
      </main> 
  )
}

  export default Projet