import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Bienvenue chez <span className="text-warning">GéniePro</span></h1>
          <p className="lead">
            Votre partenaire de confiance en construction et installations électriques.
          </p>
          <a href="#services" className="btn btn-warning btn-lg mt-3">Nos services</a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container text-center">
          <h2 className="mb-5">Nos Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title">Construction</h5>
                  <p className="card-text">
                    Nous concevons et réalisons vos projets de construction, qu'ils soient résidentiels, commerciaux ou industriels.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title">Installations électriques</h5>
                  <p className="card-text">
                    Installation et maintenance de réseaux électriques pour répondre à vos besoins en énergie.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title">Consultation</h5>
                  <p className="card-text">
                    Besoin d'experts pour vos projets d'infrastructure ? Nos ingénieurs sont là pour vous accompagner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>À propos de nous</h2>
              <p>
                Avec plus de 10 ans d'expérience, <strong>GéniePro</strong> est une agence de génie civil reconnue
                pour son expertise et son engagement envers la satisfaction client. Notre mission est de bâtir l'avenir en
                offrant des solutions innovantes et durables.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500x300"
                alt="About us"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 text-white bg-dark">
        <div className="container text-center">
          <h2>Contactez-nous</h2>
          <p>
            Prêt à concrétiser vos projets ? Contactez-nous pour un devis gratuit ou plus d'informations.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg mt-3">Demander un devis</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <p className="mb-0">© {new Date().getFullYear()} GéniePro. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default HomePage;