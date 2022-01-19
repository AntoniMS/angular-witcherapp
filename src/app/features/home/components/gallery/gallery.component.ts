import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/Home';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public gallery!: Gallery;
  constructor() {
    this.gallery = {
      title: "Galeria",
      imageGallery: [
       
        {
          src: "/assets/images/wit1.jpg",
          alt: "Foto de witcher3"
        },
        {
          src: "/assets/images/wit2.jpg",
          alt: "Foto de witcher3"
        },
        {
          src: "/assets/images/wit3.jpg",
          alt: "Foto de witcher3"
        },
        {
          src: "/assets/images/wit4.jpg",
          alt: "Foto de witcher3"
        },
        {
          src: "/assets/images/wit5.jpg",
          alt: "Foto de witcher3"
        },
        {
          src: "/assets/images/wit6.jpg",
          alt: "Foto de witcher3"
        },

      ]
    }
  }

  ngOnInit(): void {
  }

}
