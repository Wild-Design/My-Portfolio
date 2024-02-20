export class Project {
  title: string;
  subtitle: string;
  description: string;
  github: string | null;
  youtube: string | null;
  deployment: string | null;

  constructor(
    title: string,
    subtitle: string,
    description: string,
    github: string | null,
    youtube: string | null,
    deployment: string | null
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.github = github;
    this.youtube = youtube;
    this.deployment = deployment;
  }
}
const project1 = new Project(
  'Mi Portfolio',
  'Proyecto personal',
  `Bueno, este proyecto en sí mismo es el portfolio 😆.
   Utilicé una combinación de tecnologías modernas como Next.js con TypeScript y Email.js.
    Cada detalle, desde el diseño hasta
     la funcionalidad, fue cuidadosamente diseñado y desarrollado por mí.
  Explora las diferentes secciones para conocer más sobre mí, mis habilidades y
   los proyectos en los que he trabajado. Si tienes alguna pregunta o comentario,
    ¡no dudes en ponerte en contacto conmigo!`,
  'https://github.com/Wild-Design/My-Portfolio',
  null,
  '#'
);

const project2 = new Project(
  'Talkap',
  'Proyecto grupal (Bootcamp)',
  `Participé en un proyecto colaborativo donde creamos una aplicación web de chat en tiempo real.
  Esta plataforma permite a los usuarios editar sus perfiles, incluyendo la opción de cambiar
  su foto de perfil y añadir una biografía personalizada. Además, ofrece funcionalidades como
  el envío de mensajes privados, la capacidad de bloquear usuarios malintencionados,
  así como el intercambio de audios, videos y otros archivos multimedia.
  La aplicación también cuenta con una vista de administrador que proporciona
  acceso a métricas sobre el total de usuarios y gráficos estadísticos,
  así como la capacidad de banear usuarios.
  
  En este proyecto, me enfoqué principalmente en el desarrollo frontend, diseñando diversas vistas y trabajando en la lógica de la interfaz de usuario. Sin embargo, también contribuí al desarrollo backend, implementando funcionalidades adicionales como el envío de correos electrónicos y otras tareas.`,
  'https://github.com/Proyecto-Final-Soy-Henry/Talkap',
  'https://www.youtube.com/watch?v=yGclKR5vHIg',
  null
);
const project3 = new Project(
  'Pokemon App',
  'Proyecto individual',
  `Durante este proyecto individual, me embarqué en el aprendizaje de tecnologías clave como
    Redux Toolkit, TypeScript y la implementación de mejores prácticas de desarrollo.
    La aplicación se centra en mostrar los Pokémon iniciales de la región de Kanto.
    Cada Pokémon cuenta con un botón que permite visualizar su versión multicolor,
    y además, se ha diseñado una página de detalles para cada uno donde se muestran
    sus estadísticas. Además de esto, la aplicación ofrece funciones adicionales
    como la búsqueda de Pokémon por nombre y un formulario para la creación
    de nuevos Pokémon, entre otras características`,
  'https://github.com/Wild-Design/Pokemon-App',
  'https://www.youtube.com/watch?v=P6bqz0AeyNM',
  null
);
const project4 = new Project(
  'Countries App',
  'Proyecto individual (Bootcamp)',
  `Este proyecto individual fue mi primera experiencia en el desarrollo de una aplicación full stack.
      La aplicación fue diseñada para buscar países y gestionar actividades asociadas a ellos. Incluye funciones de búsqueda,
      filtrado, clasificación y creación  de actividades.
      Cada país puede tener diferentes actividades, las cuales pueden ser creadas
      y asociadas a los países mediante un formulario de creación. Además,
      la aplicación cuenta con paginación y ofrece una página de detalles para cada país.
      `,
  'https://github.com/Wild-Design/Mi-PI-de-Paises-Soy-Henry-',
  'https://www.youtube.com/watch?v=Xf_oy5h0eqM',
  null
);
const project5 = new Project(
  'TaskEase',
  'Proyecto individual',
  `Desarrollé una aplicación personal similar a Trello, que abarca tanto el frontend
        como el backend, donde implementé un sistema básico de autenticación y registro de usuarios.
        Aunque no llegué a completar la estilización del login y otras características,
        mi enfoque principal estuvo en el diseño de las tarjetas (cards).
      Me dediqué a replicar el estilo de las tarjetas de Trello, permitiendo la creación,
      eliminación y edición de tareas, así como la gestión de listas.
      Además, trabajé en funcionalidades para editar los nombres de las listas,
      entre otros detalles de diseño.`,
  'https://github.com/Wild-Design/TaskEase',
  null,
  null
);

const project6 = new Project(
  'CantaJuega Conmigo',
  'Trabajo Pasante (Guatemala)',
  `Participé en un proyecto real colaborando tanto en el desarrollo frontend
         como backend. Contribuí añadiendo diversas funcionalidades clave, como el sistema de
          inicio de sesión de usuarios, registro de nuevas cuentas, y mejoras en el panel de control,
           que incluyen la capacidad de visualizar reportes, responder a los mismos,
            y acceder a estadísticas detalladas, entre otras funcionalidades..
        `,
  null,
  null,
  null
);
export default [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
] as Project[];
