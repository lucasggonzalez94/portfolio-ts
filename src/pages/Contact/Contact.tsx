import { useState } from "react";

import "./Contact.scss";

import { ReactComponent as LinkedInLogo } from "static/icons/linkedin.svg";

import Container from "components/Container/Container";
import Button from "components/Button/Button";
import CustomLink from "components/CustomLink/CustomLink";
import Loader from "components/Loader/Loader";
import Input from "components/Input/Input";
import { validateEmail } from "utils/helpers";

const Contact = () => {
  const API_KEY = process.env.REACT_APP_SENDINBLUE;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    nameError: '',
    emailError: '',
    messageError: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    handleErrors(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleErrors = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    switch (e.target.name) {
      case 'name':
        setErrors({
          ...errors,
          nameError: e.target.value ? '' : 'El nombre es obligatorio'
        });
        break;
      case 'email':
        setErrors({
          ...errors,
          emailError: validateEmail(e.target.value) ? '' : 'Ingresa un e-mail válido'
        });
        break;
      case 'message':
        setErrors({
          ...errors,
          messageError: e.target.value ? '' : 'El mensaje debe tener contenido'
        });
        break;
    
      default:
        setErrors({
          nameError: '',
          emailError: '',
          messageError: '',
        });
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (API_KEY) {
        setLoading(true);
        const response = await fetch(
          "https://api.sendinblue.com/v3/smtp/email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "api-key": API_KEY?.toString(),
            },
            body: JSON.stringify({
              sender: {
                name: formData.name,
                email: formData.email,
              },
              to: [
                {
                  email: "lucasgggonzalez@gmail.com",
                },
              ],
              subject: "Message from Portfolio",
              htmlContent: formData.message,
            }),
          }
        );

        const data = await response.json();
        setLoading(false);

        if (data.messageId) {
          alert("Email sent successfully");
          setFormData({ name: "", email: "", message: "" });
        }
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert(
        "An error occurred while sending the email. Please try again later."
      );
    }
  };

  console.log(Object.entries(errors).some(entry => entry[1]))

  return (
    <Container title="Contacto" id="contact">
      <form onSubmit={handleSubmit} className="form-email">
        <Input
          type="text"
          name="name"
          placeholder="Tu nombre *"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleErrors}
          error={!!errors.nameError}
          errorMessage={errors.nameError}
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail *"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleErrors}
          error={!!errors.emailError}
          errorMessage={errors.emailError}
        />
        <Input
          type="textarea"
          name="message"
          placeholder="Mensaje *"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleErrors}
          error={!!errors.messageError}
          errorMessage={errors.messageError}
        />
        <Button
          content={loading ? <Loader/> : 'Enviar e-mail'}
          onClick={handleSubmit}
          variant="secondary"
          disabled={
            !!Object.entries(errors).find(entry => entry[1] !== '') ||
            !!Object.entries(formData).find(entry => entry[1] === '')
          }
        />
      </form>
      <CustomLink
        icon={<LinkedInLogo />}
        url="https://www.linkedin.com/in/lucas-gonzalez-frontend"
      />
    </Container>
  );
};

export default Contact;
