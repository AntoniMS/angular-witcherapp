import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/Home';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public hero: Hero;

  constructor() {
    this.hero = {
      img: {
        src: '/assets/images/logo.png',
        alt: 'Witcher 3: wild hunt',
      },
      description:
        'Basado en las saga de las aventuras de Geralt de Rivia, uno de los pocos brujos que quedan, asesinos de monstruos a sueldo con habilidades especiales. Geralt acepta el contrato más importante de su vida: encontrar a la niña de la profecía, un arma viviente que puede alterar el mundo tal y como se conoce.',
    };
  }

  ngOnInit(): void {}
  public mouseOn() {
    this.hero.description =
      'Basado en las saga de las aventuras de Geralt de Rivia, uno de los pocos brujos que quedan, asesinos de monstruos a sueldo con habilidades especiales. Ciri, heredera al trono de Cintra y exalumna de Geralt, es buscada por La Cacería Salvaje, un grupo antiguo de espectros. Tras varios sucesos que llevan al personaje principal a buscar a Ciri en la gran ciudad de Novigrado, en las Islas Skellige y en las tierras de Velen, Geralt, aprende que La Cacería Salvaje, busca una manera de que se cumpla la Profecía de Ithlinne, la cual dice que el universo será destruido por el Frío Blanco. Ciri, debido a que es hija de la sangre vieja, es la única que puede destruir esta profecía y salvar al mundo.';
  }

  public mouseOut() {
    this.hero.description =
      'Basado en las saga de las aventuras de Geralt de Rivia, uno de los pocos brujos que quedan, asesinos de monstruos a sueldo con habilidades especiales... (Seguir leyendo)';
  }
}
