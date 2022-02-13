import { Routes } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainComponent } from './main.component';

export const MainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'example',
        loadChildren: () =>
          import('../../pages/example-pages/example.module').then(
            (m) => m.ExampleModule
          ),
      },
      {
        path: '**',
        component: MainHomeComponent,
      },
     
    ],
  },

];
