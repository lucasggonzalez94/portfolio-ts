import './Footer.scss';

const Footer = () => {
  const actualDate = new Date();
  const actualYear = actualDate.getFullYear();

  return (
    <div className='footer'>
      <p>{`Todos los Derechos Reservados ${actualYear} - Lucas Gonzalez ©`}</p>
    </div>
  )
};

export default Footer;
