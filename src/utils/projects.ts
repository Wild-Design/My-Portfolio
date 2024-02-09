export class Project {
  title: string;
  subtitle: string;
  github: string;
  youtube: string;
  description: string;

  constructor(
    title: string,
    subtitle: string,
    github: string,
    youtube: string,
    description: string
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.github = github;
    this.youtube = youtube;
    this.description = description;
  }
}

const Projects: Project[] = [];
