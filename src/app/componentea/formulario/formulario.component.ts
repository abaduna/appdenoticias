import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  categorias: any[] = [
    { value: "general", nombre: "general" },
    { value: "business", nombre: "Negecios" },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnología' }
  ]


  paises: any[] = [
    { value: "ar", nombre: "Argentina" },
    { value: "br", nombre: "Bracil" },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'gb', nombre: 'Reino Unido' }
  ]
  @Output() parametroSelecionado = new EventEmitter<any>()

  categoriaSelecionada = "general"
  paisSelecionada = "ar"
  constructor() { }

  ngOnInit(): void {
  }
  buscarNoticias(){
   const PARAMETROS = {
    categoria: this.categoriaSelecionada,
    pais: this.paisSelecionada

   }

   this.parametroSelecionado.emit(PARAMETROS)
  }
  

  
}
