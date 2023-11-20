import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistroConductorPage } from './pages/registro-conductor/registro-conductor.page';
import { PerfilConductorPage } from './pages/perfil-conductor/perfil-conductor.page';
import { MapComponent } from './components/map/map.component';
import { ProfilePage } from './pages/profile/profile.page';
import { TrackingPage } from './pages/tracking/tracking.page';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  { path: 'map2', component: MapComponent },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./pages/forget/forget.module').then( m => m.ForgetPageModule)
  },
  
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsPageModule)
  },
  {
    path: 'drivers',
    loadChildren: () => import('./pages/drivers/drivers.module').then(m => m.DriversPageModule)
  },
  {
    path: 'bandeja-chat',
    loadChildren: () => import('./pages/bandeja-chat/bandeja-chat.module').then( m => m.BandejaChatPageModule)
  },
  {
    path: 'chat-individual/:contacto',
    loadChildren: () => import('./pages/chat-individual/chat-individual.module').then( m => m.ChatIndividualPageModule)
  },
  {
    path: 'perfil-conductor',
    loadChildren: () => import('./pages/perfil-conductor/perfil-conductor.module').then( m => m.PerfilConductorPageModule)
  },
  {
    path: 'registro-conductor',
    loadChildren: () => import('./pages/registro-conductor/registro-conductor.module').then( m => m.RegistroConductorPageModule)
  },
  { path: 'registro-conductor', component: RegistroConductorPage },
  { path: 'perfil-conductor', component: PerfilConductorPage },
  
  {
    path: 'viajes',
    loadChildren: () => import('./pages/viajes/viajes.module').then( m => m.ViajesPageModule)
  },
  {
    path: 'profile/:username',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  { path: 'profile/:username', component: ProfilePage },
  {
    path: 'historial-viajes',
    loadChildren: () => import('./pages/historial-viajes/historial-viajes.module').then( m => m.HistorialViajesPageModule)
  },
  
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'qr-generator',
    loadChildren: () => import('./pages/qr-generator/qr-generator.module').then( m => m.QrGeneratorPageModule)
  },
  {
    path: 'tracking',
    loadChildren: () => import('./pages/tracking/tracking.module').then( m => m.TrackingPageModule)
  },
  {
    path: 'tracking/:distance/:price',
    component: TrackingPage,
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./pages/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },

 
// Agrega esta ruta
  
  
  
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
