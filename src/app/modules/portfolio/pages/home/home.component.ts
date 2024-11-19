import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { AboutComponent } from "../../components/about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    ProjectsComponent,
    FooterComponent,
    AboutComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
