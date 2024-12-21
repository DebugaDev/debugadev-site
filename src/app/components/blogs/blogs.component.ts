import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogComponent } from "../blog/blog.component";

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BlogComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: Blog[] = [
    {
      imagem: '../../../assets/programacao-java.jpg',
      titulo: 'Algumas coisas sobre Java — I',
      link: 'algumas-coisas-sobre-java-1',
    },
    {
      imagem: '../../../assets/programacao-java.jpg',
      titulo: 'Algumas coisas sobre Java — II',
      link: 'algumas-coisas-sobre-java-2',
    },
    {
      imagem: '../../../assets/logback.jpg',
      titulo: 'Criando log em aplicações Spring Boot',
      link: 'criando-log-em-aplicacoes-spring-boot'
    }
  ];
}
