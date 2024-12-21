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
      imagem: 'https://via.placeholder.com/350x150',
      titulo: 'Como começar com Angular',
      link: 'https://angular.io/start',
    },
    {
      imagem: 'https://via.placeholder.com/350x150',
      titulo: 'Introdução ao TypeScript',
      link: 'https://www.typescriptlang.org/docs/',
    },
    {
      imagem: 'https://via.placeholder.com/350x150',
      titulo: 'Melhores práticas em desenvolvimento web',
      link: 'https://developer.mozilla.org/en-US/',
    },
    {
      imagem: 'https://via.placeholder.com/350x150',
      titulo: 'Quick Start React',
      link: 'https://react.dev/learn',
    },
  ];
}
