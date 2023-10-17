import { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      const UserId = process.env.REACT_APP_EMAILJS_USERID;

      emailjs
        .sendForm(
          "service_s79la6l",
          "template_xgkx39f",
          e.target,
          UserId
        )
        .then(
          (result) => {
            console.log("E-mail envoyé avec succès", result.text);
            setNom("");
            setPrenom("");
            setEmail("");
            setMessage("");
            setConfirmation("Message envoyé")
          },
          (error) => {
            console.error("Erreur lors de l'envoi de l'e-mail", error);
          }
        );
  
      e.target.reset();
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input type="text" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
        </div>
        <div>
          <label>Prénom:</label>
          <input type="text" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        </div>
        <div>
          <label>Adresse e-mail:</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Contenu du message:</label>
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Envoyer</button>
      </form>
      <div>{confirmation}</div>
    </div>
  );
};


export default Form;
