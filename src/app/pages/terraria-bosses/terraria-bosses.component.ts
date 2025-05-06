import { Component, signal } from '@angular/core';
import { TerrariaService } from '../../services/terraria.service';
import { AuthService } from '../../services/auth.service';
import { Boss } from '../../models/boss';
import { User } from '../../models/user';
import { SwitchDifficultyModeComponent } from '../../partials/switch-difficulty-mode/switch-difficulty-mode.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terraria-bosses',
  imports: [SwitchDifficultyModeComponent],
  templateUrl: './terraria-bosses.component.html',
  styleUrl: './terraria-bosses.component.scss'
})
export class TerrariaBossesComponent {
  user: User = {
    username: "Gäst",
    role: "user"
  };
  bosses: Array<Boss> = [];
  loggedIn = signal<boolean>(false); // Används för att hålla reda på om användaren är inloggad.
  current_difficulty = signal<string>("classic");


  constructor(private terrariaService: TerrariaService, private authService: AuthService, private router: Router) { }

  /**
   * Laddar in data ifall användaren är inloggad, annars ett meddelande.
   */
  public ngOnInit(): void {
    this.terrariaService.getData(this.authService.getToken()!).subscribe((data) => { // ! ska fungera. Om inte token finns hanteras det med att man inte är inloggad.
      this.loggedIn.set(true);
      this.setUser(data['user']);
      this.setBosses(data['terraria_bosses']);
    });
    this.loggedIn.set(false);
  }

  /**
   * Sätter nuvarande användaren.
   * @param user - nuvarande användaren.
   */
  private setUser(user: User): void {
    this.user = user;
  }

  /**
   * Sätter terraria bosses.
   * @param bosses - terraria bosses.
   */
  private setBosses(bosses: Array<Boss>): void {
    for (let i = 0; i < bosses.length; i++) {
      bosses[i].rowID = i;
    }
    this.bosses = bosses;
  }

  /**
   * Ändrar vilken svårighetsgrad som ska visas.
   * @param value - svårighetsgrad.
   */
  public changeDifficulty(value: string) {
    this.current_difficulty.set(value);
  }

  /**
   * Förflyttar användaren till inloggningssidan.
   */
  public toLoginPage(): void {
    this.router.navigate(["account"]);
  }
}
