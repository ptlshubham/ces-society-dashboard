import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { DepartmentComponent } from './department/department.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { NewsComponent } from './news/news.component';
import { OthersComponent } from './others/others.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentResultComponent } from './student-result/student-result.component';

const routes: Routes = [
  {
    path: 'image-upload',
    component: ImageUploadComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'staff-details',
    component: StaffDetailsComponent
  },
  {
    path: 'student-details',
    component: StudentDetailsComponent
  },
  {
    path: 'others',
    component: OthersComponent
  },
  {
    path: 'result',
    component: StudentResultComponent
  },
  {
    path: 'infrastructure',
    component: InfrastructureComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'college-list',
    component: CollegeListComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
