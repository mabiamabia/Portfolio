import { Component, OnInit } from '@angular/core';
import { projectsMock, Projects } from '@app/shared/helpers/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [`
    .project-card {
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      overflow: hidden;
      margin: 20px;
      background: var(--surface-card, rgba(255, 255, 255, 0.8)); /* Ajusta com o tema */
      padding: 20px;
    }

    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .project-title {
      font-size: 1.5rem;
      color: var(--text-color, #333); /* Ajusta com o tema */
      margin-bottom: 10px;
    }

    .project-description {
      color: var(--text-secondary-color, #666); /* Ajusta com o tema */
      margin-bottom: 10px;
    }

    .project-technologies {
      font-style: italic;
      margin-bottom: 10px;
    }

    .project-link {
      margin-right: 10px;
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
    }

    .project-link:hover {
      color: #0056b3;
    }
  `],
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];

  constructor() {}

  ngOnInit() {
    this.projects = projectsMock;
  }
}

export { Projects };
