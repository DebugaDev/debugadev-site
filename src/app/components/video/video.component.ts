import { Component, Input } from '@angular/core';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    SafePipe
  ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() url: string = '';
}
