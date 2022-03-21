import Image from "next/image";

import PlayVideo from "./playVideo";
import Search from "./search";

// Assets
import arrow from "../../public/assets/bitmap.png";

export default function SearchSection() {
  return (
    <section className="section__search d-flex flex-column align-items-center mt-3">
      <h2 className="section__search-title text-center mt-4 mb-0">
        Vende tu casa<br></br> en un <span className="fw-bolder">clic</span>
      </h2>
      <div className="section__search-arrow">
        <Image src={arrow} alt="arrow" />
      </div>
      <Search />
      <p className="text-center my-3">
        Compramos tu casa directamente
        <br /> sin complicaciones ni preocupaciones.
      </p>
      <PlayVideo />
    </section>
  );
}
