import { ExampleListComponent } from './components/example-list/example-list.component';
import { DashboardLayoutModule } from 'src/app/shared/layouts/dashboard-layout/dashboard-layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExampleRoutes } from './example.routing';

@NgModule({
  declarations: [ExampleListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ExampleRoutes),
    DashboardLayoutModule,
  ],
})
export class ExampleModule {}
