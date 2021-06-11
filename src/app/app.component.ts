import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service'
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Clientes', url: '/clientes', icon: 'people' },
    { title: 'Productos', url: '/productos', icon: 'cart' },
    { title: 'Hoja de ruta', url: '/hojasderuta', icon: 'location' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Acerca de', url: '/about', icon: 'information' }
  ];
  public labels = [];
  constructor(
    private _authService: AuthenticationService,
    private router: Router,
    private storage: Storage,
  ) { }
  
  async ngOnInit() {
    await this.storage.create();
  }

  async logout() {
    await this._authService.logout();
    this.router.navigateByUrl('', { replaceUrl: true });
  }
}