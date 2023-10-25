import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="error-page pages">
      <section className="error-page-s1">
        <h2 className="error-page_title" aria-label="Erreur 404">
          404
        </h2>
        <p className="error-page_subtitle" aria-label="Page non trouvée">
          Oups! La page que vous demandez n existe pas.
        </p>
        <Link
          className="error-page_link"
          to="/"
          title="Accueil"
          aria-label="Retourner sur la page d'accueil"
        >
          Retourner sur la page d accueil
        </Link>
      </section>
    </main>
  );
}

export default Error;
