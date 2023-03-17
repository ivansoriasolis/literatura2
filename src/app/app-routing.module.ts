import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectLoggedInToHome },
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin },
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
