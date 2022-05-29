import { YeniKullaniciComponent } from './kullanicilar/yeni-kullanici/yeni-kullanici.component';
import { TumKullanicilarComponent } from './kullanicilar/tum-kullanicilar/tum-kullanicilar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardLayoutModule } from 'src/app/shared/layouts/dashboard-layout/dashboard-layout.module';
import { RegistrationRoutes } from './registration.routing';

@NgModule({
  declarations: [TumKullanicilarComponent,YeniKullaniciComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RegistrationRoutes),
    DashboardLayoutModule,
  ]
})
export class RegistrationModule { }

