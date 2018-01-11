import { RoutingModule } from './routing/routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficKIPComponent } from './grafic-kip/grafic-kip.component';
import { GraficRetentionComponent } from './grafic-retention/grafic-retention.component';
import { GraficMAUComponent } from './grafic-mau/grafic-mau.component';
import { GraficHeatMapComponent } from './grafic-heatmap/grafic-heatmap.component';
import { GraficLayerComponent } from './grafic-layer/grafic-layer.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { Ng2HighchartsModule } from 'ng2-highcharts';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    Ng2HighchartsModule
  ],
  declarations: [
    AdminComponent,
    HeaderComponent,
    LeftSideComponent,
    FooterComponent,
    ControlSidebarComponent,
    DashboardComponent,
    GraficKIPComponent,
    GraficMAUComponent,
    GraficRetentionComponent,
    GraficHeatMapComponent,
    GraficLayerComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
