import { Component } from '@angular/core';
import { RomanizeService } from 'src/app/services/romanize.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RomanNumerals';

  numeroRomano: String = '';

  constructor(private romanizeService: RomanizeService) { }

  convertir(numero){
    this.numeroRomano = this.romanizeService.romanize(parseInt(numero, 10));
  }
}
