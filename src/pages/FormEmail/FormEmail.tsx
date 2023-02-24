import { useState } from "react";

import "./FormEmail.scss";

import { ReactComponent as LinkedInLogo } from "static/icons/linkedin.svg";

import Container from "components/Container/Container";
import Button from "components/Button/Button";
import CustomLink from "components/CustomLink/CustomLink";

const FormEmail = () => {
  const API_KEY = process.env.REACT_APP_SENDINBLUE;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (API_KEY) {
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

        if (data.messageId) {
          alert("Email sent successfully");
          setFormData({ name: "", email: "", message: "" });
        }
      }
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred while sending the email. Please try again later."
      );
    }
  };

  return (
    <Container title="Contacto" fill>
      <form onSubmit={handleSubmit} className="form-email">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          text="Enviar e-mail"
          onClick={handleSubmit}
          variant="secondary"
        />
      </form>
      <CustomLink
        icon={<LinkedInLogo />}
        url="https://www.linkedin.com/in/lucas-gonzalez-frontend"
      />
    </Container>
  );
};

export default FormEmail;
