import CardTestimonios from "./CardTestimonios.jsx";
import agradecimiento1 from "../../assets/images/agradecimientos/agradecimiento1.png";
import agradecimiento2 from "../../assets/images/agradecimientos/agradecimiento2.png";
import agradecimiento3 from "../../assets/images/agradecimientos/agradecimiento3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarruselTestimonios = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <div className="mt-10 mb-20 bg-gradient-to-l from-lime-300 to-lime-600/35 rounded-xl">
        <div className="w-3/4 m-auto">
          <Slider {...settings}>
            <CardTestimonios
              agradecimiento="Siempre están atentos a nuestras necesidades y nunca dejan correos sin responder. Además, cumplen con los plazos comprometidos para las tareas, lo que nos brinda una gran confianza y tranquilidad en cada proyecto."
              src={agradecimiento1}
              descripcion="Somos afortunados por contar con vuestros servicios"
              empresa="Codelco"
            />
            <CardTestimonios
              agradecimiento="No puedo dejar de destacar el excelente servicio que hemos recibido. Su equipo es diligente y siempre está disponible para resolver nuestras dudas. No solo responden a todos los correos, sino que también cumplen rigurosamente con los plazos comprometidos para las tareas."
              src={agradecimiento2}
              descripcion="Tenemos confianza en ustedes"
              empresa="Lider"
            />
            <CardTestimonios
              agradecimiento="Quiero expresar mi gratitud por su excelente servicio. Cada correo enviado es respondido de manera oportuna, y todas las tareas se entregan dentro de los plazos comprometidos. Su profesionalismo y dedicación son inigualables y altamente valorados."
              src={agradecimiento3}
              descripcion="Hemos ordenado la forma de estructurarnos como empresa"
              empresa="Aguas Andinas"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CarruselTestimonios;
