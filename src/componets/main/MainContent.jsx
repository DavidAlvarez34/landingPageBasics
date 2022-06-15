import './styleMainContent.css'

const MainContent = () => {
  return (
    <main>
      <section>
        <div className="content-sesion">
          <h3>
            Suscríbete y obtén acceso a millones de libros y audiolibros en 19
            idiomas
          </h3>
          <p>
            Únete a nuestra comunidad de 6 millones de usuarios en todo el mundo
            y lee clásicos, nuevos lanzamientos, biografías, cómics, novelas
            románticas o de ciencia ficción. Únete a nuestra comunidad de más de
            un millón de suscriptores en todo el mundo.
          </p>
        </div>

        <div>
          <img
            src="https://vanguardassets.bmstatic.com/assets/629569126c9ed6fa586aff4fe16a17ca.png"
            alt=""
          />
        </div>
      </section>
    
      <section>

         <div>
          <img
            src="https://vanguardassets.bmstatic.com/assets/2866d0a2b5814a3957b0c31096a2b53a.png"
            alt=""
          />
        </div>
        <div className="content-sesion">
          <h3>
          Disfruta de más de 50,000 libros gratuitos.
          </h3>
          <p>
          Encontrarás clásicos, literatura reconocida, ensayos y teoría política. Elige lo que quieras de nuestra colección gratuita.
          </p>
        </div>

        
      </section>
    </main>
  );
}

export default MainContent