import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router, public alertController: AlertController, public ToastController:ToastController) {}

  ListaAtores: IAtores[] = [
    {
      nome: 'Jenna Ortega',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9zNcmBpVwvYpqQ9yCpGGYpOyvZl.jpg',
      idade: 20,
      creditos: 46,
      genero: "Female",
      descricao: 'Jenna Marie Ortega (born September 27, 2002) is an American actress. She began her career as a child actress, receiving recognition for her role as young Jane on The CW comedy-drama series Jane the Virgin (2014–2019). She had her breakthrough for starring as Harley Diaz on the Disney Channel series Stuck in the Middle (2016–2018), for which she won an Imagen Award. She played Ellie Alves in the second season of the Netflix thriller series You in 2019 and starred in the Netflix family film Yes Day (2021).',
      pagina: "/jenna-ortega",
      favorito: false
    },
    {
      nome: 'Jason Momoa',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6dEFBpZH8C8OijsynkSajQT99Pb.jpg',
      idade: 43,
      creditos: 64,
      genero: "Male",
      descricao: 'Joseph Jason Namakaeha Momoa (born August 1, 1979) is an American actor and filmmaker. He made his acting debut as Jason Ioane on the syndicated action drama series Baywatch: Hawaii (1999–2001), which was followed by his portrayal of Ronon Dex on the Syfy science fiction series Stargate Atlantis (2005–2009), Khal Drogo in the first two seasons of the HBO fantasy drama series Game of Thrones (2011–2012), Declan Harp on the Discovery Channel historical drama series Frontier (2016–2018), and Baba Voss on the Apple TV+ science fiction series See (2019–present). Momoa was featured as the lead of the two lattermost series.',
      pagina: "/jason-momoa",
      favorito: false
   }
  ]
  exibirAtor(ator: IAtores){
    const navigationextras: NavigationExtras = {state:{paramAtor:ator}}
    this.router.navigate(['ator-detalhe'], navigationextras)
  }
  async exibirAlertaFavorito(filme: IAtores){
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
