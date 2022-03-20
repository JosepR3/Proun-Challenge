export default function ToSellSection() {
  return (
    <section className="section__toSell d-flex flex-column align-items-center">
      <div className="container d-flex flex-column align-items-center mt-5">
        <h3 className="section__toSell-title mt-5">
          Vender tu piso nunca fue tan fácil
        </h3>
        <p className="section__advantages-subtitle text-center my-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="steps__container d-flex flex-row mt-4">
          <div className="d-flex flex-row p-3 w-25">
            <div className="steps__number">
              <p>1</p>
            </div>
            <div className="d-flex flex-column w-75 ms-2">
              <h5 className="steps__title">Descríbemos tu inmueble</h5>
              <p className="steps__subtitle">No te preocupes de su estado, ni de reparaciones para eneseñarlo</p>
            </div>
          </div>
          <div className="d-flex flex-row p-3 w-25">
            <div className="steps__number">
              <p>2</p>
            </div>
            <div className="d-flex flex-column w-75 ms-2">
              <h5 className="steps__title">Recibe una oferta en 24 horas</h5>
              <p className="steps__subtitle">Piénsatela!</p>
            </div>
          </div>
          <div className="d-flex flex-row p-3 w-25">
            <div className="steps__number">
              <p>3</p>
            </div>
            <div className="d-flex flex-column w-75 ms-2">
              <h5 className="steps__title">Dinos hasta cuando quieres quedarte</h5>
              <p className="steps__subtitle">Nos ajustamos a tus necesidades, cuando tu estés listo, nosotros también lo estaremos</p>
            </div>
          </div>
          <div className="d-flex flex-row p-3 w-25">
            <div className="steps__number">
              <p>4</p>
            </div>
            <div className="d-flex flex-column w-75 ms-2">
              <h5 className="steps__title">Ya está!</h5>
              <p className="steps__subtitle">Firma la venta y recibe el dinero</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
