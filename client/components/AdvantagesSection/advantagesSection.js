
import AdvantagesSectionDesktop from "./advantageSectionDesktop";
import AdvantagesSectionMobile from "./advantageSectionMobile";

export default function AdvantagesSection(props) {
  const width = props.width;

  return (
    <section className="section__advantages container-fluid">
      <div className="section__advantages-container d-flex flex-column align-items-center p-1 m-auto">
        <h3 className="section__advantages-title">En Clicasa sólo hay ventajas</h3>
        <p className="section__advantages-subtitle text-center mt-1 mx-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{ width > 420 ? <br/> : null} eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        { width > 420 ? <AdvantagesSectionDesktop /> : <AdvantagesSectionMobile />}
      </div>
    </section>
  )
}