import { TumKullanicilarComponent } from './kullanicilar/tum-kullanicilar/tum-kullanicilar.component';
import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';

export const RegistrationRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'tum-kullanicilar',
        //   canActivate: [AuthGuardService],
          data: { pageId: 92 },
          component: TumKullanicilarComponent,
        },
      ],
    },
  ];
  