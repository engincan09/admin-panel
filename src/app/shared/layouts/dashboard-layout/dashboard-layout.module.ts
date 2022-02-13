import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideBarComponent,
    DashboardLayoutComponent,
    TopBarComponent,
    FooterComponent
  ],
  imports: [FormsModule, RouterModule, ],
  exports: [DashboardLayoutComponent, SideBarComponent],
})
export class DashboardLayoutModule {}
