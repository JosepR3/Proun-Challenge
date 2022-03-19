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
    <header className="header fixed-top py-4">
      <div className="container d-flex">
      <div>
        <a href="#">
          <Image
            src={mainLogo}
            alt="Logo"
          />
        </a>
      </div>
      <div className="d-flex">
        <button>VENDER</button>
        <button>COMPRAR</button>
        <button>#YOELIJOCLICKPISO</button>
        <DropdownHeader />
      </div>
      <div>
        <a href="#">
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
