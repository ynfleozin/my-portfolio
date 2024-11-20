import { Component, inject, signal } from '@angular/core';

// Components
import { SharedModule } from '../../../../../shared/shared.module';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/granromano.webp',
      alt: 'Projeto Gran Romano',
      title: 'Site Gran Romano',
      description: 'Este projeto é um site corporativo desenvolvido para a empresa Gran Romano, especializada em produtos alimentícios. O site foi criado com o objetivo de fornecer informações detalhadas sobre a empresa e seus produtos, além de facilitar o contato com os clientes.',
      links: [
        {
          name: 'Visitar site',
          href: 'https://www.granromano.com.br/'
        }
      ]
    },
    {
      src: 'assets/img/projects/shtecno.webp',
      alt: 'Projeto SH Tecnologia',
      title: 'Site SH Tecnologia',
      description: 'Este projeto é um site corporativo desenvolvido para a empresa SH Tecnologia, especializada em serviços na área tecnológica. O site foi criado com o objetivo de apresentar informações detalhadas sobre a empresa, parceiros e seus serviços, além de facilitar o contato com clientes.',
      links: [
        {
          name: 'Visitar site',
          href: 'https://www.shtecno.com.br/'
        }
      ]
    },
    {
      src: 'assets/img/projects/fitnesstracker.webp',
      alt: 'Projeto Fitness Tracker',
      title: 'Fitness Tracker',
      description: 'Este é um projeto de fitness desenvolvido para ajudar os usuários a monitorar seus treinos, atividades e objetivos pessoais. O aplicativo é construído usando Spring Boot e Hibernate para back-end com MySQL como banco de dados e Angular para front-end, fornecendo uma interface intuitiva para gerenciar e visualizar o progresso do condicionamento físico.',
      links: [
        {
          name: 'Repositório',
          href: 'https://github.com/ynfleozin/fitness-project'
        }
      ]
    },
    {
      src: 'assets/img/projects/URL-shortener.webp',
      alt: 'Projeto URL Shortener',
      title: 'URL Shortener',
      description: 'Este projeto é um sistema de encurtador de URLs desenvolvido utilizando AWS Lambda, S3 e Amazon API Gateway, com Java 17 como linguagem de programação. O sistema permite que os usuários gerem links curtos com tempo de expiração definido, além de realizar o redirecionamento para as URLs originais de forma eficiente. O projeto foi desenvolvido como parte de um aprendizado em arquitetura serverless utilizando a infraestrutura da AWS.',
      links: [
        {
          name: 'Repositório',
          href: 'https://github.com/ynfleozin/URL-shortener'
        }
      ]
    },
  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
