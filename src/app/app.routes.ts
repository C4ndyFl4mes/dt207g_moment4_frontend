import { Routes } from '@angular/router';
import { TerrariaBossesComponent } from './pages/terraria-bosses/terraria-bosses.component';
import { AccountComponent } from './pages/account/account.component';

export const routes: Routes = [
    { path: "terraria_bosses", component: TerrariaBossesComponent },
    { path: "account", component: AccountComponent },
    { path: "", redirectTo: "/terraria_bosses", pathMatch: "full" }
];
