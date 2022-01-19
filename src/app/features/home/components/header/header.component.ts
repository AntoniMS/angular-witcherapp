import { Component, OnInit } from '@angular/core';
import { Header } from '../../models/Home';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  public header: Header;
  

  constructor() {
    
    this.header = {
      img: {
        src: '/assets/images/wolflogo.png',
        alt: 'Logo Witcher',
      },
      name: 'The Witcher III',
      created: 'UpgradeHub',
    };
  }
  ngOnInit(): void {}

  
  public changeName() {
    this.header.name = this.header.name === 'The Witcher III' ? 'TW3: Wild Hunt' : 'The Witcher III';
  }
}
