import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()//quando o componente for chamado, podera ser passado os valores.
  //E essa propriedade vem do angular. 
  //Inputamos os valores onde chama o componente. Neste caso a pagina/home que esta chamando.
  photoCover:string = ""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
