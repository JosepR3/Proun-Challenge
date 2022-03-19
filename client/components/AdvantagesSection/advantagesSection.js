import Image from "next/image";

// Assets
import rotate from "../../public/assets/if-rotation-left-1814080.png";
import wallet from "../../public/assets/shape_5.png";
import paperPlane from "../../public/assets/paperplane.png";
import calendar from "../../public/assets/group-3.png";

export default function AdvantagesSection() {
  return (
    <section className="section__advantages">
      <div className="section__advantages-container d-flex flex-column align-items-center p-1 m-auto">
        <h3 className="section__advantages-title mt-5">En Clicasa sólo hay ventajas</h3>
        <p className="section__advantages-subtitle text-center mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="d-flex flex-row mt-4">
          <div className="d-flex flex-column align-items-center p-2">
            <div>
              <Image
              src={rotate}
              alt="rotate icon"
              width={80}
              height={80}
              layout="fixed"
              />
            </div>
            <h5 className="section__advantages-title-card my-4">Oferta en 24 h</h5>
            <p className="section__advantages-subtitle text-center">No te preocupes de su estado, ni de reparaciones para eneseñarlo</p>
          </div>
          <div className="d-flex flex-column align-items-center p-2">
            <div>
              <Image
              src={wallet}
              alt="wallet icon"
              width={80}
              height={80}
              layout="fixed"
              />
            </div>
            <h5 className="section__advantages-title-card my-4">Pago inmediato</h5>
            <p className="section__advantages-subtitle text-center">No te preocupes de su estado, ni de reparaciones para eneseñarlo</p>
          </div>
          <div className="d-flex flex-column align-items-center p-2">
            <div>
              <Image
              src={paperPlane}
              alt="paperplane icon"
              width={80}
              height={80}
              layout="fixed"
              />
            </div>
            <h5 className="section__advantages-title-card my-4">Ahórrate el papeleo</h5>
            <p className="section__advantages-subtitle text-center">Si lo necesitas también podemos ayudarte a encontrar tu nuevo hogar</p>
          </div>
          <div className="d-flex flex-column align-items-center p-2">
            <div>
              <Image
              src={calendar}
              alt="calendar icon"
              width={80}
              height={80}
              layout="fixed"
              />
            </div>
            <h5 className="section__advantages-title-card my-4">Tu eliges la fecha</h5>
            <p className="section__advantages-subtitle text-center">Si lo necesitas también podemos ayudarte a encontrar tu nuevo hogar</p>
          </div>
        </div>
      </div>
    </section>
  )
}