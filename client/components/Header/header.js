import Image from "next/image";
import Link from "next/link";

// Components
import DropdownHeader from "./dropdownHeader";

// Assets
import mainLogo from "../../public/assets/logo-principal.png";
import phoneLogo from "../../public/assets/phone.png";
import waLogo from "../../public/assets/whatsapp.png";
import mailLogo from "../../public/assets/mail.png";
import options from "../../public/assets/options-dropdown.png";

export default function Header(props) {
  const width = props.width;

  return (
    <header className="header fixed-top py-3">
      <div className="container-fluid d-flex flex-row align-items-center justify-content-between">
        {width < 420 ? <div><Image src={options} alt="options logo"/></div> : null}
        <div className="mx-2">
          <a href="#">
            <Image src={mainLogo} alt="Logo" />
          </a>
        </div>

        <div className="d-flex flex-row flex-wrap align-items-center">
          <Link href="#">
            <a className="steps__subtitle header__links mx-1 px-1 px-2 pb-1">
              VENDER
            </a>
          </Link>
          <Link href="#">
            <a className="steps__subtitle header__links mx-1 px-1 px-2 pb-1">
              COMPRAR
            </a>
          </Link>
          <Link href="#">
            <a className="steps__subtitle header__links mx-1 px-1 px-2 pb-1">
              #YOELIJOCLICKPISO
            </a>
          </Link>
          <DropdownHeader />
        </div>

        <div className="d-flex flex-row align-items-center">
          <a className="d-flex flex-row align-items-center mx-2" href="#">
            <Image src={phoneLogo} alt="Phone Logo" />
            {width > 420 ? "910 123 456" : null}
          </a>
          <a href="#">
            <Image src={waLogo} alt="Whatsapp Logo" />
          </a>
          <a href="#">
            <Image src={mailLogo} alt="Mail Logo" />
          </a>
        </div>
      </div>
    </header>
  );
}
