import { About } from '../components/Content/About';
import { Contact } from '../components/Content/Contact';
import { Front } from '../components/Content/Front';
import { Projects } from '../components/Content/Projects';

export const sideOptions = [
  { option: 'Inicio', content: 'front' },
  { option: 'Proyectos', content: 'proyects' },
  { option: 'Sobre mi', content: 'about' },
  { option: 'Contacto', content: 'contact' },
];

export const getContent = (content) => {
  const components = {
    about: <About />,
    contact: <Contact />,
    proyects: <Projects />,
    front: <Front />,
  };

  return components[content] ?? <></>;
};
