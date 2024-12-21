import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideosComponent } from './components/videos/videos.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { PoliticaPrivacidadeComponent } from './components/politica-privacidade/politica-privacidade.component';
import { TermosUsoComponent } from './components/termos-uso/termos-uso.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AlgumasCoisasSobreJava1Component } from './tutorials/algumas-coisas-sobre-java-1/algumas-coisas-sobre-java-1.component';
import { AlgumasCoisasSobreJava2Component } from './tutorials/algumas-coisas-sobre-java-2/algumas-coisas-sobre-java-2.component';
import { CriandoLogEmaaplicacoesSpringBootComponent } from './tutorials/criando-log-emaaplicacoes-spring-boot/criando-log-emaaplicacoes-spring-boot.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "videos", component: VideosComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "quem-somos", component: QuemSomosComponent },
  { path: "contato", component: ContatoComponent },
  { path: "politica-privacidade", component: PoliticaPrivacidadeComponent },
  { path: "termos-uso", component: TermosUsoComponent },
  { path: "algumas-coisas-sobre-java-1", component: AlgumasCoisasSobreJava1Component },
  { path: "algumas-coisas-sobre-java-2", component: AlgumasCoisasSobreJava2Component },
  { path: "criando-log-emaaplicacoes-spring-boot", component: CriandoLogEmaaplicacoesSpringBootComponent }
];
