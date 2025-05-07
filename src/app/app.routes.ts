import { Routes } from '@angular/router';
import { TerrariaBossesComponent } from './pages/terraria-bosses/terraria-bosses.component';
import { AccountComponent } from './pages/account/account.component';
import { AuthGuard } from './auth.guard';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';

export const routes: Routes = [
    { path: "terraria_bosses", component: TerrariaBossesComponent, canActivate: [AuthGuard] },
    { path: "forbidden", component: ForbiddenComponent },
    { path: "account", component: AccountComponent },
    { path: "", redirectTo: "/terraria_bosses", pathMatch: "full" }
];
