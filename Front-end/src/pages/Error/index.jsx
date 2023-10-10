//REACT
import { Link } from "react-router-dom";

//FCT
function Error() {
    return (
      <main className="error-page pages">
        <section className="error-page-s1">
          <h2 className="error-page_title">404</h2>
          <p className="error-page_subtitle">Oups! La page que vous demandez n'existe pas.</p>
          <Link className="error-page_link" to="/">Retourner sur la page d'accueil</Link>
        </section>
			</main>
    )
  }

  export default Error