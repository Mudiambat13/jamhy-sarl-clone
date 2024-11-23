import React, { useState } from "react";

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormSubmitted(true);

    // Reset form if needed
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="quote-form-container">
      {formSubmitted ? (
        <div className="form-success">
          <h2>Merci !</h2>
          <p>Nous avons bien reçu votre demande. Nous vous contacterons bientôt.</p>
        </div>
      ) : (
        <form className="quote-form" onSubmit={handleSubmit}>
          <h2>Demandez un devis</h2>
          <label htmlFor="name">Nom complet *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Entrez votre nom complet"
          />

          <label htmlFor="email">Adresse e-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Entrez votre e-mail"
          />

          <label htmlFor="phone">Numéro de téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Entrez votre numéro de téléphone"
          />

          <label htmlFor="service">Service souhaité *</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">-- Choisissez un service --</option>
            <option value="design">Design graphique</option>
            <option value="web">Développement web</option>
            <option value="seo">SEO / Marketing</option>
            <option value="consulting">Consultation</option>
          </select>

          <label htmlFor="message">Message complémentaire</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre besoin ou projet en détail"
          ></textarea>

          <button type="submit" className="submit-button">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default QuoteForm;