import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-de-noticias',
  templateUrl: './listado-de-noticias.component.html',
  styleUrls: ['./listado-de-noticias.component.css']
})
export class ListadoDeNoticiasComponent implements OnInit {
@Input() listaDeNoticias:any
  constructor() { }

  ngOnInit(): void {
  }

}
