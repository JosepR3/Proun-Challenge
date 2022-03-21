import Image from 'next/image';

// Assets
import home from "../../public/assets/shape_2.png";

export default function Search(props) {
  const width = props.width
  console.log(width)
  return (
    <div className="container-fluid d-flex flex-column align-items-center">
    <div className="section__search-container d-flex flex-row align-items-center p-2 mt-5 mx-2">
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
      { width > 420 ?
        <button className="section__search-btn ms-auto" type="submit">VENDER MI INMUEBLE</button> :
        null
      }
    </div>
    { width < 420 ? <button className="section__search-btn w-100 mt-3 mx-2" type="submit">VENDER MI INMUEBLE</button> : null }
    </div>
  );
}
