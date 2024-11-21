import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone Angular',
      name: 'Angular'
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Ícone Spring',
      name: 'Spring'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone Java',
      name: 'Java'
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone TypeScript',
      name: 'TypeScript'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone JavaScript',
      name: 'JavaScript'
    },
    {
      src: 'assets/icons/knowledge/sql.svg',
      alt: 'Ícone SQL',
      name: 'SQL Server'
    },
    {
      src: 'assets/icons/knowledge/aws.svg',
      alt: 'Ícone AWS',
      name: 'Amazon Web Service'
    },
    {
      src: 'assets/icons/knowledge/node.svg',
      alt: 'Ícone Node.js',
      name: 'Node.js'
    },
    {
      src: 'assets/icons/knowledge/scss.svg',
      alt: 'Ícone SCSS',
      name: 'SCSS'
    },
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'Ícone HTML',
      name: 'HTML'
    },
    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'Ícone CSS',
      name: 'CSS'
    },
  ])
}
