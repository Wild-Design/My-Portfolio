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
  'CantaJuega Conmigo',
  'Trabajo Pasante (Guatemala)',
  `Colabore en un proyecto real participando tanto en frontend y backend,
  añadiendo funcionalidades como login de usuarios, register, funcionalidades en el
  dashboard como la de ver reportes y responder a los mismos, ver estadísticas y
  varias funcionalidades más.
  `,
  null,
  null,
  'xd'
);
const project2 = new Project(
  'Talkap',
  'Proyecto grupal (Bootcamp)',
  `Proyecto donde trabajé en equipo. Creamos una
  aplicación web de chat en tiempo real, donde cada usuario puede editar su
  perfil como por ejemplo editar su foto, tener su propia biografía, etc. Mandar
  mensajes privados, bloquear usuarios maliciosos, envío de audios, videos y
  demás cosas como vista de administrador con total de usuarios, gráficas y
  posibilidad de banear usuarios.
  Mi roll en esta aplicación estuvo más enfocada en frontend creando diferentes
  vistas y lógica, aunque también participé en backend añadiendo
  funcionalidades como envío de emails y demás cosas.
  `,
  'https://github.com/Proyecto-Final-Soy-Henry/Talkap',
  'https://www.youtube.com/watch?v=yGclKR5vHIg',
  'xd'
);
const project3 = new Project(
  'Pokemon App',
  'Proyecto individual',
  `Proyecto individual donde incluí a tecnologías como Redux
  Toolkit, TypeScript y mejores prácticas.
  La app inicialmente muestra los primeros pokemons de la región de kanto,
  cada pokemon tiene un botón para poder ver su versión multicolor y a su vez
  cada pokemon tiene su página de detalles donde muestro sus estadísticas.
  La app también tiene la posibilidad de buscar pokemons por nombre,
  formulario para crear pokemons y etc`,
  'https://github.com/Wild-Design/Pokemon-App',
  'https://www.youtube.com/watch?v=P6bqz0AeyNM',
  'xd'
);
const project4 = new Project(
  'Countries App',
  'Proyecto individual (Bootcamp)',
  `Proyecto individual donde incluí a tecnologías como Redux
  Toolkit, TypeScript y mejores prácticas.
  La app inicialmente muestra los primeros pokemons de la región de kanto,
  cada pokemon tiene un botón para poder ver su versión multicolor y a su vez
  cada pokemon tiene su página de detalles donde muestro sus estadísticas.
  La app también tiene la posibilidad de buscar pokemons por nombre,
  formulario para crear pokemons y etc`,
  'https://github.com/Wild-Design/Mi-PI-de-Paises-Soy-Henry-',
  'https://www.youtube.com/watch?v=Xf_oy5h0eqM',
  null
);
const project5 = new Project(
  'TaskEase',
  'Proyecto individual',
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi dolor iure quisquam sapiente iusto unde adipisci. Quibusdam, qui obcaecati?`,
  null,
  null,
  null
);

export default [project1, project2, project3, project4, project5] as Project[];
