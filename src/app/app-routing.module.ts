import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FormsComponent } from './pages/forms/forms.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { EmployeesComponent } from './pages/employees/employees.component';

import { EmployeeComponent } from './component/employee/employee.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { DepartmentsComponent } from './component/departments/departments.component';
import { AttendanceComponent } from './component/attendance/attendance.component';
import { DesignationComponent } from './component/designation/designation.component';
import { HolidaysComponent } from './component/holidays/holidays.component';
import { LeaverequestComponent } from './component/leaverequest/leaverequest.component';
import { ClientsComponent } from './component/clients/clients.component';


const routes: Routes = [
  {path: '',   redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'attendance', component: AttendanceComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'designation', component: DesignationComponent},
  {path: 'holidays', component: HolidaysComponent},
  {path: 'leaverequest', component: LeaverequestComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'notifications', component: NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
