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
        En la web:{' '}
        <a href="https://www.linkedin.com/in/ricardo-campelo/" target="_blank">
          LinkedIn
        </a>{' '}
        /{' '}
        <a href="https://github.com/rc-coder" target="_blank">
          Github
        </a>{' '}
        /
        <a href="https://www.instagram.com/rc.campelo/" target="_blank">
          Instagram
        </a>
      </span>
    </ContactContainer>
  );
};
