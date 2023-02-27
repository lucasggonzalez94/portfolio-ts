import Container from "components/Container/Container";
import Text from "components/Text/Text";


const AboutMe = () => {
  return (
    <Container title="Sobre mí">
      <Text
        text='Soy un desarrollador web altamente capacitado con casi 2 años de experiencia en el desarrollo de aplicaciones en tecnologías como React JS y Nest JS. Tengo experiencia en el trabajo dentro del marco de trabajo SCRUM y estoy comprometido a seguir aprendiendo y mejorando mis habilidades.'
      />
      <Text
        text='Mi formación incluye estudios en la Universidad Tecnológica Nacional (UTN), donde adquirí una sólida base en programación, y también me he capacitado de forma autodidacta en plataformas como Udemy, aprendiendo las tecnologías necesarias para desempeñar mi trabajo con éxito.'
      />
      <Text
        text='Estoy altamente motivado y apasionado por mi carrera en el desarrollo web y estoy buscando una oportunidad para unirme a un equipo dinámico y enfocado en el crecimiento y la innovación. Estoy seguro de que puedo aportar valor a su empresa y trabajar duro para lograr los objetivos comunes.'
      />
      <Text
        text='Gracias por tomarse el tiempo de leer un poco sobre mi y estoy emocionado de poder hablar más sobre cómo puedo contribuir a su empresa.'
      />
    </Container>
  );
};

export default AboutMe;
