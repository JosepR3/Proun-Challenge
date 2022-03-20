
import { useSelector } from "react-redux";
import Image from "next/image";


// State
import { reviewsSelector } from "../../redux/reviews/reviews-selector";

export default function ClientReviewSection() {

  const reviews = useSelector(reviewsSelector);
  console.log(reviews);

  return (
    <section className="section__clients">
      <div className="container">
        <h3 className="section__clients-title">Nuestra mejor referencia, nuestros clientes</h3>
        <p className="section__clients-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="client__container">
        <div className="client__card card">
          <div className="client__card-img card-img-top">
            <img
              src="https://media.istockphoto.com/photos/pretty-young-female-choosing-a-good-book-picture-id1044774166?s=612x612"
            />
          </div>
          <div className="card-body">
            <p className="card-text">{reviews?.review}</p>
            <h5 className="card-title">{reviews?.clientName}</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
