import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Full-Stack",
        p: "Freelancer | Nov 2023 - Presente",
      },
      text: "<p>Atuo como desenvolvedor freelancer, colaborando com empresas e clientes em projetos de desenvolvimento web para criar soluções personalizadas e otimizadas.</p><p>Principais tecnologias utilizadas: Angular, Java, SpringBoot JavaScript, TypeScript, Hibernate, MySQL, Node.js, GIT</p>"
    },
  ])
}
