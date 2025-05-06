import { Component, computed, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  username = signal<string>('');
  password = signal<string>('');
  usernameTouched = signal<boolean>(false);
  passwordTouched = signal<boolean>(false);
  serverError: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Sammlar felmeddelanden för inmatning för användarnamn.
   */
  usernameError = computed(() => {
    const value = this.username;
    const errors: Array<{id: number; message: string;}> = [];
    if (value().length === 0) errors.push({id: 0, message: "Obligatorisk."});
    if (value().length < 2) errors.push({id: 1, message: "För kort. Minst två tecken långt."});
    if (value().length > 32) errors.push({id: 2, message: "För långt. Högst 32 tecken långt."});
    if (/[^a-zA-Z0-9_-]/.test(value())) errors.push({id: 3, message: "Får inte innehålla special tecken."});
    return errors;
  });

  /**
   * Sammlar felmeddelanden för inmatning för lösenord.
   */
  passwordError = computed(() => {
    const value = this.password;
    const errors: Array<{id: number; message: string;}> = [];
    if (value().length === 0) errors.push({id: 0, message: "Obligatorisk."});
    if (!/[a-z]/.test(value())) errors.push({id: 1, message: "Måste innehålla en liten bokstav."});
    if (!/[A-Z]/.test(value())) errors.push({id: 2, message: "Måste innehålla en stor bokstav."});
    if (!/\d/.test(value())) errors.push({id: 3, message: "Måste innehålla en siffra."});
    if (!/[!@#$%^&*]/.test(value())) errors.push({id: 4, message: "Måste innehålla ett special tecken (!@#$%^&*)."});
    if (value().length < 16) errors.push({id: 5, message: "För kort. Minst 16 tecken långt."});

    return errors;
  });

  /**
   * Kollar om formuläret är korrekt.
   * @returns boolean
   */
  public isFormValid(): boolean {
    return this.usernameError().length == 0 && this.passwordError().length == 0;
  }

  /**
   * Registrerar en användare.
   */
  public onRegister(): void {
    if (this.isFormValid()) {
      this.authService.register({username: this.username(), password: this.password()}).subscribe({
        next: res => {
          console.log("Registreringen lyckades.", res.message);
          this.onLogin();
        },
        error: error => {
          console.log(error.error);
          this.serverError = error.error;
        } 
      });
    }
  }

  /**
   * Loggar in en användare.
   */
  public onLogin(): void {
    if (this.isFormValid()) {
      this.authService.login({username: this.username(), password: this.password()}).subscribe({
        next: res => {
          this.authService.setToken(res.token);
          console.log("Inloggningen lyckades.");
          this.router.navigate(["terraria_bosses"]);
        },
        error: error => {
          console.log(error.error.message);
          this.serverError = error.error.message;
        } 
      });
    }
  }
}
