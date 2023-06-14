import { Component } from '@angular/core';
import { ISerie } from '../model/ISeries';
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router, public alertController: AlertController, public ToastController:ToastController) {}
  listaSeries: ISerie[] = [
    {
      nome: "The Good Doctor",
      lancamento: '2017',
      duracao: '6 seasons',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/luhKkdD80qe62fwop6sdrXK9jUT.jpg',
      generos: ['Drama'],
      pagina: '/the-good-doctor',
      favorito: false
    },
    {
      nome: "Lucifer",
      lancamento: '2016',
      duracao: '6 seasons',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ekZobS8isE6mA53RAiGDG93hBxL.jpg',
      generos: ['Crime', 'Sci-Fi & Fantasy'],
      pagina: '/lucifer',
      favorito: false
    },
    {
      nome: "Woman in a Veil",
      lancamento: '2023',
      duracao: '3 seasons',
      classificacao: 39,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5ERr09UrnVm0hdXBeefNVtQMxI.jpg',
      generos: ['Drama'],
      pagina: '/woman-in-a-veil',
      favorito: false
    }
  ]
  async exibirAlertaFavorito(serie: ISerie){
    const alerta = await this.alertController.create({
      header: 'Meus favoritos',
      message: 'Deseja realemente favoritar?',
      buttons: [
        {
        text: "cancelar",
        role: "cancel",
        handler: ()=>{
          serie.favorito=false
        }
      },
      {
        text: "Sim, favoritar",
        handler: ()=>{
          serie.favorito=true
        }
      }
    ]
    })
    await alerta.present()
  }
  exibirserie(serie: ISerie){
    const navigationextras: NavigationExtras = {state:{paramSerie:serie}}
    this.router.navigate(['serie-detalhe'], navigationextras)
  }
}
