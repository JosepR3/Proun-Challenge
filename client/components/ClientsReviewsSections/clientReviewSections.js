import { useSelector } from "react-redux";
import Image from "next/image";

// State
import { reviewsSelector } from "../../redux/reviews/reviews-selector";

// Flicking
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

// Assets
import reviewImg from "../../public/assets/rectangle-7-copy-2.png";

export default function ClientReviewSection() {
  const reviewsEstado = useSelector(reviewsSelector);
  const reviews =  reviewsEstado.reviews

  console.log(reviews);

  return (
    <section className="section__clients w-100">
      <div className="container text-center my-5">
        <h3 className="section__advantages-title mt-3">
          Nuestra mejor referencia, nuestros clientes
        </h3>
        <p className="section__advantages-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Flicking
        moveType="freeScroll"
        bound={true}
        // className="mx-auto"
        align="prev"
      >
      {reviews &&
        reviews.map((review) => {
          return (
            <div className="client__container mx-5" key={review?.id}>
              <div className="client__card card">
                <div className="client__card-img card-img-top">
                  <Image
                    src={reviewImg}
                    alt="review image"
                    layout="fixed"
                  />
                </div>
                <div className="card-body p-4">
                  <p className="card-text">{review?.company.catchPhrase}</p>
                  <h5 className="card-title fw-bolder">{review?.name}</h5>
                </div>
              </div>
            </div>
          );
        }
      )}
      </Flicking>
    </section>
  );
}
