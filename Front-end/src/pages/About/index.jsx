
function About() {
  const formations = [
    {
      id: 1,
      titre: "Formation integrateur web",
      lieu: "Openclassrooms",
      annee: "2023"
    },
    {
      id: 2,
      titre: "Diplôme d’université de soins infirmiers en réanimation",
      lieu: "Université de Nice Sophia Antipolis",
      annee: "2013-2014"
    },
    {
      id: 3,
      titre: "Diplôme d'état infirmier",
      lieu: "IFSI de Cannes",
      annee: "2009-2012"
    },
    {
      id: 4,
      titre: "Licence Mathématiques appliquées aux Sciences Sociales",
      lieu: "Université de Nice Sophia Antipolis",
      annee: "2006-2009"
    },
    {
      id: 5,
      titre: "Baccalauréat scientifique",
      lieu: "Lycée Amiral de Grasse",
      annee: "2006"
    },
  ];

    const competenceslogos = [
      {
        id: 1,
        icone: "https://github.com/Cehesse/Portfolio/blob/main/Front-end/src/assets/img/techno-logo/HTML5.webp?raw=true"
      },
      {
        id: 2,
        icone: "https://github.com/Cehesse/Portfolio/blob/main/Front-end/src/assets/img/techno-logo/CSS3.webp?raw=true"
      },
      {
        id: 3,
        icone: "https://github.com/Cehesse/Portfolio/blob/main/Front-end/src/assets/img/techno-logo/JS.webp?raw=true"
      },
      {
        id: 4,
        icone: "https://github.com/Cehesse/Portfolio/blob/main/Front-end/src/assets/img/techno-logo/SASS.webp?raw=true"
      },
      {
        id: 5,
        icone: "https://github.com/Cehesse/Portfolio/blob/main/Front-end/src/assets/img/techno-logo/REACT.webp?raw=true"
      },
      {
        id: 6,
        icone: "https://github.com/Cehesse/Portfolio/blob/main/Front-end/src/assets/img/techno-logo/REDUX.webp?raw=true"
      },
      {
        id: 7,
        icone: "https://github.com/Cehesse/Portfolio/blob/main/Front-end/src/assets/img/techno-logo/GIT.webp?raw=true"
      },
      {
        id: 8,
        icone: "https://github.com/Cehesse/Portfolio/blob/main/Front-end/src/assets/img/techno-logo/GITHUB.webp?raw=true"
      },
      {
        id: 9,
        icone: "https://github.com/Cehesse/Portfolio/blob/main/Front-end/src/assets/img/techno-logo/VSCODE.webp?raw=true"
      },
      {
        id: 10,
        icone: "https://github.com/Cehesse/Portfolio/blob/main/Front-end/src/assets/img/techno-logo/FIGMA.webp?raw=true"
      }
    ];

    const atouts = [
      {
        id: 1,
        nom: "Force de proposition"
      },
      {
        id: 2,
        nom: "Autonomie"
      },
      {
        id: 3,
        nom: "Sens de l'organisation"
      },
      {
        id: 4,
        nom: "Travail en équipe"
      }
    ];

    const competences = [
      {
        id: 1,
        nom: "Analyser les besoins du client"
      },
      {
        id: 2,
        nom: "Méthodes agile"
      },
      {
        id: 3,
        nom: "Référencement SEO"
      },
      {
        id: 4,
        nom: "Accessibilité"
      },
    ];

    return (
      <main className="about-page pages">
        <h2 className="about-page_title" aria-label="Formations">Formations</h2>
        <ul className="formation_list">
          {formations.map(formation => (
            <li key={formation.id} className="formation_item">
              <h3>{formation.titre}</h3>
              <p>{formation.lieu}</p>
              <p>{formation.annee}</p>
            </li>
          ))}
        </ul>
        <h2 className="about-page_title" aria-label="Compétences">Compétences</h2>
        <ul className="competenceslogos_list">
          {competenceslogos.map(competence => (
            <li key={competence.id} className="competenceslogos_item">
              <img src={competence.icone} className="competenceslogos_icon" alt="Logo" title="Logo" aria-label="Logo de compétence" />
            </li>
          ))}
        </ul>
        <div className="competences_text">
          <ul className="competences_list">
            {competences.map(competence => (
              <li key={competence.id}>
                <p className="competences_item">{competence.nom}</p>
              </li>
            ))}
          </ul>
          <ul className="competences_list">
            {atouts.map(atout => (
              <li key={atout.id}>
                <p className="competences_item">{atout.nom}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
  
  export default About;