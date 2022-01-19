import { Component, OnInit } from '@angular/core';
import { Main } from '../../models/Home';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  public main: Main[];
  public isImage:boolean = false;

  constructor() { 
    this.main = [
      {
        title: 'Geralt de Rivia',
        text: 'Brujo',
        img: {
          src:'/assets/images/geralt1.png', 
          alt: 'Geralt imagen'
        }
      },
      {
        title: 'Cirilla Fiona',
        text: 'Heredera de Cintra',
        img: {
          src:'/assets/images/ciri1.png', 
          alt: 'Ciri imagen'
        }
      },
      {
        title: 'Yennefer de Vengerberg',
        text: 'Maga',
        img: {
          src:'/assets/images/yen1.png', 
          alt: 'Yennefer imagen'
        }
      },
      {
        title: 'Triss Merigold',
        text: 'Maga',
        img: {
          src:'/assets/images/triss1.png', 
          alt: 'Triss imagen'
        }
      },
      {
        title: 'Vesemir',
        text: 'Brujo',
        img: {
          src:'/assets/images/vesemir1.png', 
          alt: 'Vesemir imagen'
        }
      },
      {
        title: 'Jaskier',
        text: 'Bardo',
        img: {
          src:'/assets/images/jaskier1.png', 
          alt: 'Jaskier imagen'
        }
      },
    ];
  }

  ngOnInit(): void {
  }
  public changeImage () {
    this.isImage = !this.isImage;
  }

}