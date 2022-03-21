import Image from "next/image";

// Assets
import mainLogo from "../../public/assets/logo-principal.png";
import phoneLogo from "../../public/assets/phone.png";
import mailLogo from "../../public/assets/mail.png";
import fbLogo from "../../public/assets/1489335132-facebook-circle-color.png";
import twLogo from "../../public/assets/1489335133-twitter-circle-color.png";
import inLogo from "../../public/assets/1489335130-linkedin-circle-color.png";
import ytLogo from "../../public/assets/1489335135-youtube-circle-color.png";

export default function Footer() {
  return (
    <footer className="container d-flex flex-column footer mt-4">
      <div className="d-flex flex-row justify-content-around my-4">
        <div>
          <Image src={mainLogo} alt="brand logo" />
        </div>
        <div className="d-flex flex-row align-items-center">
          <a className="d-flex flex-row align-items-center" href="#">
            <Image src={phoneLogo} alt="phone logo" />
            911 123 456
          </a>
          <a className="d-flex flex-row align-items-center" href="#">
            <Image src={mailLogo} alt="mail logo" />
            info@clicasa.com
          </a>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around my-4">
        <div>
          <p className="steps__subtitle m-0">© 2017 CLICASA. TODOS LOS DERECHOS RESERVADOS</p>
        </div>
        <div className="d-flex flex-row align-items-center">
          <a className="steps__subtitle mx-2" href="#">Mapa web</a>
          <a className="steps__subtitle mx-2" href="#">Contacto</a>
          <a className="steps__subtitle mx-2" href="#">Aviso legal</a>
        </div>
        <div>
          <a className="mx-1" href="#"><Image src={fbLogo}/></a>
          <a className="mx-1" href="#"><Image src={twLogo}/></a>
          <a className="mx-1" href="#"><Image src={inLogo}/></a>
          <a className="mx-1" href="#"><Image src={ytLogo}/></a>
        </div>
      </div>
    </footer>
  );
}
