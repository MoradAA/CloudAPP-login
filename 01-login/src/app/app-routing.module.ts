import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'results', loadChildren: './results/results.module#ResultsPageModule' },
  { path: 'photo', loadChildren: './photo/photo.module#PhotoPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'lobby', loadChildren: './lobby/lobby.module#LobbyPageModule' },
  { path: 'hints', loadChildren: './hints/hints.module#HintsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
