import { Component } from '@angular/core';
import { NoticiaService } from './servicios/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias: any[] = []
  loouding = false
  constructor(private _noticiaservice: NoticiaService) {

  }
  buscarNoticias(parametros: any) {
    this.loouding = true
    this._noticiaservice.getNoticias(parametros).subscribe(data=>{
      this.loouding = false
      this.listNoticias = data.articles
    },error =>{
    console.log(error);
      
    })
  }
}
