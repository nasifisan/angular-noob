import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
};

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [NavbarComponent, CommonModule, RouterOutlet],
  imports: [
    RouterOutlet,
    HttpClientModule,
    NavbarComponent,
    // FormlyModule,
    // FormlyMaterialModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-noob';
}
