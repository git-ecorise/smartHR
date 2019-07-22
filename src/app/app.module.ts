import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FormsComponent } from './pages/forms/forms.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ClientsComponent } from './component/clients/clients.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { HolidaysComponent } from './component/holidays/holidays.component';
import { LeaverequestComponent } from './component/leaverequest/leaverequest.component';
import { AttendanceComponent } from './component/attendance/attendance.component';
import { DepartmentsComponent } from './component/departments/departments.component';
import { DesignationComponent } from './component/designation/designation.component';
import { EmployeeComponent } from './component/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TablesComponent,
    FormsComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
    EmployeesComponent,
    ClientsComponent,
    ProjectsComponent,
    HolidaysComponent,
    LeaverequestComponent,
    AttendanceComponent,
    DepartmentsComponent,
    DesignationComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
