import { ContactContainer } from './contactElements';

export const Contact = () => {
  return (
    <ContactContainer>
      <h2>Hola.</h2>
      <p>¿Quieres trabajar conmigo y crear algo genial? Ponte en contacto.</p>
      <br />
      <span>
        Email:{' '}
        <a href="mailto:rcrd.campelo@gmail.com">rcrd.campelo@gmail.com</a>
      </span>
      <br />
      <span>
        En la web: <a href="">LinkedIn</a> / <a href="">Github</a> /
        <a href="">Instagram</a>
      </span>
    </ContactContainer>
  );
};
