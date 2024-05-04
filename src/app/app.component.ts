import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FirebaseService } from './core/services/firebase/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, HeaderComponent, FooterComponent],
  standalone: true,
})
export class AppComponent {
  protected firebaseService = inject(FirebaseService);
}
