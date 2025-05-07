import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  imports: [],
  templateUrl: './forbidden.component.html',
  styleUrl: './forbidden.component.scss'
})
export class ForbiddenComponent {

  constructor(private router: Router) {

  }
  /**
     * Förflyttar användaren till inloggningssidan.
     */
  public toLoginPage(): void {
    this.router.navigate(["account"]);
  }
}
