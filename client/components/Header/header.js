import Image from "next/image";

// Components
import DropdownHeader from "./dropdownHeader";

// Assets
import mainLogo from "../../public/assets/logo-principal.png";
import phoneLogo from "../../public/assets/phone.png";
import waLogo from "../../public/assets/whatsapp.png";
import mailLogo from "../../public/assets/mail.png";

export default function Header() {
  return (
    <header className="header fixed-top py-3">
      <div className="container d-flex flex-row justify-content-between">
      <div>
        <a href="#">
          <Image
            src={mainLogo}
            alt="Logo"
          />
        </a>
      </div>
      <div className="d-flex flex-row flex-wrap align-items-center">
        <a className="steps__subtitle header__links mx-1 px-1 px-2 pb-1" href="#">VENDER</a>
        <a className="steps__subtitle header__links mx-1 px-1 px-2 pb-1" href="#">COMPRAR</a>
        <a className="steps__subtitle header__links mx-1 px-1 px-2 pb-1" href="#">#YOELIJOCLICKPISO</a>
        <DropdownHeader />
      </div>
      <div className="d-flex flex-row align-items-center">
        <a className="d-flex flex-row align-items-center mx-2" href="#">
          <Image
            src={phoneLogo}
            alt="Phone Logo"
          />
        910 123 456
        </a>
        <a href="#">
        <Image
            src={waLogo}
            alt="Whatsapp Logo"
          />
        </a>
        <a href="#">
        <Image
            src={mailLogo}
            alt="Mail Logo"
          />
        </a>
      </div>
      </div>
    </header>
  );
}
