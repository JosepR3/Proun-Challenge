import Image from "next/image";

// Assets
import house from "../../public/assets/group-3.png";
import money from "../../public/assets/path-5603-8-2-9-8.png";
import lens from "../../public/assets/group-2.png";

export default function AdvantagesSectionMobile() {
  return (
    <div className="d-flex flex-column mt-2 mx-2">
      <div className="d-flex flex-row mx-2">
        <div className="">
          <Image src={house} alt="house icon" layout="fixed" />
        </div>
        <div className="d-flex flex-column align-items-start mx-4">
          <h5 className="section__advantages-title-card">
            Compramos tu piso como esté
          </h5>
          <p className="section__advantages-subtitle">
            No te preocupes de su estado, ni de reparaciones para eneseñarlo
          </p>
        </div>
      </div>
      <div className="d-flex flex-row mx-2">
        <div>
          <Image src={money} alt="money icon" layout="fixed" />
        </div>
        <div className="d-flex flex-column align-items-start mx-4">
          <h5 className="section__advantages-title-card">Pago al instante</h5>
          <p className="section__advantages-subtitle">
            No te preocupes de su estado, ni de reparaciones para eneseñarlo
          </p>
        </div>
      </div>
      <div className="d-flex flex-row mx-2">
        <div>
          <Image src={lens} alt="lens icon" layout="fixed" />
        </div>
        <div className="d-flex flex-column align-items-start mx-4">
          <h5 className="section__advantages-title-card">
            Te ayudamos con tu nueva casa
          </h5>
          <p className="section__advantages-subtitle">
            Si lo necesitas también podemos ayudarte a encontrar tu nuevo hogar
          </p>
        </div>
      </div>
    </div>
  );
}
