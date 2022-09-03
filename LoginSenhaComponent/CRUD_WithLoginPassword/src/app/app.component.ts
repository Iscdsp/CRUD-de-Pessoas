import { Component } from '@angular/core';
import { Title } from '../app/title';
import { Endereco } from './shared/models/endereco.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titles: Title[] = [
    {
      title: 'Cadastro de Pessoas',
      router_link: '/pessoas',
    },
    {
      title: 'Endereços',
      router_link: '/enderecos',
    },
    { title: 'Cidades', router_link: '/cidades' },
  ];
}
