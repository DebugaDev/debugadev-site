import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() imagem: string = '';
  @Input() titulo: string = '';
  @Input() link: string = '';
}
