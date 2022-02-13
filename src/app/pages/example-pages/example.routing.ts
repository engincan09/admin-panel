import { ExampleListComponent } from './components/example-list/example-list.component';
import { Routes } from '@angular/router';


export const ExampleRoutes: Routes = [
  {
    path: 'liste',
    // data: { pageId: 9 },
    // canActivate: [AuthGuardService],
    component: ExampleListComponent,
  },
 
];
