import Image from "next/image";

// Assets
import client from "../../public/assets/group.png";

export default function ClientImgSection() {
  return (

    <section className="section__blank">
      <div className="section__toSell-img m-auto">
        <Image src={client} alt="client browsing" layout="responsive" />
      </div>
    </section>
  );
}
