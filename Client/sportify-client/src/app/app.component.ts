import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule  } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    provideAnimations()
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

