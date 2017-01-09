import { RouterModule, Routes } from "@angular/router";

import { SignupComponent } from "./unprotected";
import { SigninComponent } from "./unprotected";
import { ProtectedComponent } from "./protected";
import {AuthGuard} from "./shared";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
