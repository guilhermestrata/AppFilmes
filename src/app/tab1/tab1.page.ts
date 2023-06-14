import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public alertController: AlertController, public ToastController:ToastController) {}
  listaFilmes: IFilme[] =[
    {
      nome: "Spider-Man: Across the Spider-Verse",
      lancamento: '2023',
      duracao: '2h20m',
      classificacao: 88,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      generos: ['Action', 'Adventure', 'Animation', 'Science Fiction'],
      pagina: '/spider-man',
      favorito: false
    },
    {
      nome: "Transformers: Rise of the Beasts",
      lancamento: '2023',
      duracao: '2h7m',
      classificacao: 74,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
      generos: ['Action', 'Adventure', 'Science Fiction'],
      pagina: '/transformers',
      favorito: false
    },
    {
      nome: "The Super Mario Bros. Movie",
      lancamento: '2023',
      duracao: '1h32m',
      classificacao: 78,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      generos: ['Animation', 'Family', 'Adventure', 'Fantasy', 'Comedy'],
      pagina: '/super-mario-bros',
      favorito: false
    },
    {
      nome: "Fast X",
      lancamento: '2023',
      duracao: '2h22m',
      classificacao: 74,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      generos: ['Action', 'Crime', 'Thriller'],
      pagina: '/fast-x',
      favorito: false
    }
  ]
  exibirFilme(filme: IFilme){
    const navigationextras: NavigationExtras = {state:{paramFilme:filme}}
    this.router.navigate(['filme-detalhe'], navigationextras)
  }
  async exibirAlertaFavorito(filme: IFilme){
    const alerta = await this.alertController.create({
      header: 'Meus favoritos',
      message: 'Deseja realemente favoritar?',
      buttons: [
        {
        text: "cancelar",
        role: "cancel",
        handler: ()=>{
          filme.favorito=false
        }
      },
      {
        text: "Sim, favoritar",
        handler: ()=>{
          filme.favorito=true
        }
      }
    ]
    })
    await alerta.present()
  }
}
