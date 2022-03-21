import Image from 'next/image';

// Assets
import home from "../../public/assets/shape_2.png";

export default function Search() {
  return (
    <div className="section__search-container d-flex flex-row align-items-center p-2 mt-5">
      <div className="ms-1">
      <Image
        src={home}
        alt="home icon"
        width={25}
        height={25}
        layout="fixed"
      />
      </div>
      <input className="section__search-input ms-2" placeholder="Introduce la dirección de tu casa o piso"></input>
      <button className="section__search-btn ms-auto" type="submit">VENDER MI INMUEBLE</button>
    </div>
  );
}
