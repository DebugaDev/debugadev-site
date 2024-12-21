import { Component } from '@angular/core';
import { VideoComponent } from '../video/video.component';
import { Video } from '../../models/video';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [
    VideoComponent
  ],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {

  listVideo: Video[] = [
    {
      titulo: "CURSO JAVA PARA INICIANTES - 2023",
      subtitulo: "FOR e FOREACH",
      url: "https://www.youtube.com/embed/8hJsSYuDTJA?si=fW49K6iVLRdfA5iw"
    },
    {
      titulo: "CURSO JAVA PARA INICIANTES - 2023",
      subtitulo: "WHILE e DO WHILE",
      url: "https://www.youtube.com/embed/WE0xsG6A70Y?si=sTwwJcfNE4RBkd3k"
    },
    {
      titulo: "CURSO JAVA PARA INICIANTES - 2023",
      subtitulo: "Incremento e Decremento e Operador Complementar",
      url: "https://www.youtube.com/embed/WGhmmpxn2dU?si=I-6VOhLDWZDgIusV"
    },
    {
      titulo: "CURSO JAVA PARA INICIANTES - 2023",
      subtitulo: "Switch e IF",
      url: "https://www.youtube.com/embed/eJJAImhGV0I?si=oiao8sJ-yKwEvrUO"
    },
    {
      titulo: "CURSO JAVA PARA INICIANTES - 2023",
      subtitulo: "IF - ELSE IF - ELSE e Operadores",
      url: "https://www.youtube.com/embed/-iZrOiPzXzM?si=wckjMvfDlCc2HQ0k"
    },
    {
      titulo: "CURSO JAVA PARA INICIANTES - 2023",
      subtitulo: "Wrappers e Autoboxing e Unboxing",
      url: "https://www.youtube.com/embed/MsxQKFSmW44?si=wO1WhC7TBNK32XGN"
    },
    {
      titulo: "CURSO JAVA PARA INICIANTES - 2023",
      subtitulo: "String em Java",
      url: "https://www.youtube.com/embed/z9Hrr8gcWxI?si=Z1cgneeKg877UUmZ"
    },
    {
      titulo: "CURSO JAVA PARA INICIANTES - 2023 - PT2",
      subtitulo: "Métodos e Instâncias",
      url: "https://www.youtube.com/embed/mzo2m-K2oFk?si=oU7OhPCltFXhZC4Y"
    },

    {
      titulo: "CURSO JAVA PARA INICIANTES - 2023 - PT1",
      subtitulo: "Classes e variáveis",
      url: "https://www.youtube.com/embed/1M89FmNZQR0?si=3QEsmZEd1ebhFgla"
    },

    {
      titulo: "HISTÓRIA JAVA E SUAS FUNCIONALIDADES",
      subtitulo: "Senta que lá vem história",
      url: "https://www.youtube.com/embed/I3HtU_J57Vw?si=6Oiz4uQWD3HmgzJi"
    },

    {
      titulo: "CHEGAMOS DEBUGUERS",
      subtitulo: "Apresentando nosso ambiente",
      url: "https://www.youtube.com/embed/0WPeB-Is5WA?si=aI3MKkMwZoKe6CUa"
    },
    {
      titulo: "CHEGAMOS DEBUGUERS",
      subtitulo: "Apresentando o Debuga Dev",
      url: "https://www.youtube.com/embed/1q6zNs023gk?si=tAuiCVGZl7VlC8Xw"
    }
  ];
}

