import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { PoliticaPrivacidadeComponent } from './components/politica-privacidade/politica-privacidade.component';
import { TermosUsoComponent } from './components/termos-uso/termos-uso.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "videos", component: VideosComponent },
  { path: "blog", component: BlogComponent },
  { path: "quem-somos", component: QuemSomosComponent },
  { path: "contato", component: ContatoComponent },
  { path: "politica-privacidade", component: PoliticaPrivacidadeComponent },
  { path: "termos-uso", component: TermosUsoComponent }
];
