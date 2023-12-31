import { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const UserId = import.meta.env.VITE_APP_EMAILJS_USERID;

    emailjs
      .sendForm("service_s79la6l", "template_xgkx39f", e.target, UserId)
      .then(
        (result) => {
          console.log("E-mail envoyé avec succès", result.text);
          setNom("");
          setPrenom("");
          setEmail("");
          setNum("");
          setMessage("");
          setConfirmation("Message envoyé");
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'e-mail", error);
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_items">
          <div className="form_identity">
            <div className="form_item">
              <label htmlFor="nom" className="form_label">
                Nom: <sub className="form_required">*</sub>
              </label>
              <input
                className="form_input"
                id="nom"
                type="text"
                name="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
                aria-label="Nom"
              />
            </div>
            <div className="form_item">
              <label htmlFor="prenom" className="form_label">
                Prénom: <sub className="form_required">*</sub>
              </label>
              <input
                className="form_input"
                id="prenom"
                type="text"
                name="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
                aria-label="Prénom"
              />
            </div>
            <div className="form_item">
              <label htmlFor="email" className="form_label">
                Adresse e-mail: <sub className="form_required">*</sub>
              </label>
              <input
                className="form_input"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="adresse@exemple.com"
                required
                aria-label="Adresse e-mail"
              />
            </div>
            <div className="form_item">
              <label htmlFor="num" className="form_label">
                Numéro de téléphone:
              </label>
              <input
                className="form_input"
                id="num"
                type="tel"
                name="num"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                aria-label="Numéro de téléphone"
              />
            </div>
          </div>
          <div>
            <div className="form_item">
              <label htmlFor="message" className="form_label">
                Contenu du message: <sub className="form_required">*</sub>
              </label>
              <textarea
                className="form_input form_area"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                aria-label="Contenu du message"
              />
            </div>
          </div>
        </div>
        <button className="form_button" type="submit" aria-label="Envoyer">
          Envoyer
        </button>
      </form>
      <div className="form_confirmation" aria-live="polite">
        {confirmation}
      </div>
    </div>
  );
};

export default Form;
