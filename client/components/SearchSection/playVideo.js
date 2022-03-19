import Image from "next/image";

// Assets
import play from "../../public/assets/boton-de-play.png";

export default function PlayVideo() {
  return (
    <a href="#">
      <div className="section__search-play d-flex flex-row align-items-center p-1">
        <p className="my-0 ms-3">VER VÍDEO</p>
        <div className="ms-auto mt-1">
          <Image
            src={play}
            alt="play icon"
            width={30}
            height={30}
            layout="fixed"
          />
        </div>
      </div>
    </a>
  );
}
