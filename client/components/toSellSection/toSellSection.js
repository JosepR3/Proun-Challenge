import Image from "next/image";

// Assets
import client from "../../public/assets/group.png";

export default function ToSellSection(props) {
  const width = props.width;
  return (
    <section className="section__toSell container-fluid d-flex flex-column align-items-center mb-2">
      <div className="container d-flex flex-column align-items-center mt-3">
        <div className="section__toSell-title-container">
          <h3 className="section__toSell-title text-center mx-2">
            Vender tu piso nunca fue tan fácil
          </h3>
          <p className="section__advantages-subtitle text-center mx-5 my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            {width > 420 ? <br /> : null}
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div
          className={
            width > 420
              ? "steps__container d-flex flex-row mt-4"
              : "steps_container d-flex flex-column"
          }
        >
          <div className="d-flex flex-row my-2 px-2">
            <div className="steps__number">
              <p>1</p>
            </div>
            <div className="d-flex flex-column w-75 ms-2">
              <h5 className="steps__title">Descríbemos tu inmueble</h5>
              <p className="steps__subtitle">
                No te preocupes de su estado, ni de reparaciones para eneseñarlo
              </p>
            </div>
          </div>
          { width < 420 ? 
          <div className="container-fluid">
            <Image 
            src={client}
            alt="client image"
            width={400}
            height={200}
            />
          </div> 
            : null }
          <div className="d-flex flex-row my-2 px-2">
            <div className="steps__number">
              <p>2</p>
            </div>
            <div className="d-flex flex-column w-75 ms-2">
              <h5 className="steps__title">Recibe una oferta en 24 horas</h5>
              <p className="steps__subtitle">Piénsatela!</p>
            </div>
          </div>
          { width < 420 ? 
            <Image 
            src={client}
            alt="client image"
            
            /> 
            : null }
          <div className="d-flex flex-row my-2 px-2">
            <div className="steps__number">
              <p>3</p>
            </div>
            <div className="d-flex flex-column w-75 ms-2">
              <h5 className="steps__title">
                Dinos hasta cuando quieres quedarte
              </h5>
              <p className="steps__subtitle">
                Nos ajustamos a tus necesidades, cuando tu estés listo, nosotros
                también lo estaremos
              </p>
            </div>
          </div>
          { width < 420 ? 
            <Image 
            src={client}
            alt="client image"
            
            /> 
            : null }
          <div className="d-flex flex-row my-2 px-2">
            <div className="steps__number">
              <p>4</p>
            </div>
            <div className="d-flex flex-column w-75 ms-2">
              <h5 className="steps__title">Ya está!</h5>
              <p className="steps__subtitle">
                Firma la venta y recibe el dinero
              </p>
            </div>
          </div>
          { width < 420 ? 
            <Image 
              src={client}
              alt="client image"
              
            /> 
            : null }
        </div>
      </div>
    </section>
  );
}
