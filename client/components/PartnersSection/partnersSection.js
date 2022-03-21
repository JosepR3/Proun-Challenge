import Image from "next/image";

// Assets
import inmoSeguros from "../../public/assets/group-4.png";
import mapfre from "../../public/assets/group-5.png";

export default function AdvantagesSection() {
  return (
  <section className="section__partners d-flex flex-column align-items-center">
    <h3 className="section__toSell-title mt-5">Trabajamos con las mejores empresas</h3>
    <p className="section__advantages-subtitle text-center my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className="d-flex flex-row my-5">
      <div>
        <Image
        src={inmoSeguros}
        alt="inmoseguros icon"
        
        />
      </div>
      <div>
        <Image
        src={mapfre}
        alt="mapfre icon" 
        
        />
      </div>
    </div>
  </section>
  )
}
