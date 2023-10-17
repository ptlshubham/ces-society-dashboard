import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumniListComponent } from './alumni-list/alumni-list.component';
import { AnswerKeyComponent } from './answer-key/answer-key.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CounselingComponent } from './counseling/counseling.component';
import { DepartmentComponent } from './department/department.component';
import { DonationBulkUploadComponent } from './donation-bulk-upload/donation-bulk-upload.component';
import { DonationComponent } from './donation/donation.component';
import { GatePassComponent } from './gate-pass/gate-pass.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { InfraDetailsComponent } from './infra-details/infra-details.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { MagazineComponent } from './magazine/magazine.component';
import { MicroDonationComponent } from './micro-donation/micro-donation.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { MoreComponent } from './more/more.component';
import { NewsComponent } from './news/news.component';
import { OthersComponent } from './others/others.component';
import { QuestionPapersComponent } from './question-papers/question-papers.component';
import { RahotkarshBulkUploadComponent } from './rahotkarsh-bulk-upload/rahotkarsh-bulk-upload.component';
import { RahotkarshComponent } from './rahotkarsh/rahotkarsh.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { NaacComponent } from './naac/naac.component';
import { LinkGeneratorComponent } from './link-generator/link-generator.component';
import { CommiteeComponent } from './commitee/commitee.component';
import { CommDetailsComponent } from './comm-details/comm-details.component';

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
  {
    path: 'donation',
    component: DonationComponent
  },
  {
    path: 'rahotkarsh',
    component: RahotkarshComponent
  },
  {
    path: 'rahotkarsh-bulk',
    component: RahotkarshBulkUploadComponent
  },
  {
    path: 'donation-bulk',
    component: DonationBulkUploadComponent
  },
  {
    path: 'alumni-list',
    component: AlumniListComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: 'details/:id',
    component: BlogDetailsComponent
  },
  {
    path: 'infra-details/:id',
    component: InfraDetailsComponent
  },
  {
    path: 'magazine',
    component: MagazineComponent
  },
  {
    path: 'counseling',
    component: CounselingComponent
  },
  {
    path: 'more',
    component: MoreComponent
  },
  {
    path: 'more-details/:id',
    component: MoreDetailsComponent
  },
  {
    path: 'papers',
    component: QuestionPapersComponent
  },
  {
    path: 'gate-pass',
    component: GatePassComponent
  },
  {
    path:'answer-key',
    component:AnswerKeyComponent
  },
  {
    path:'micro-donation',
    component:MicroDonationComponent
  },
  {
    path:'naac',
    component:NaacComponent
  },
  {
    path:'link-generater',
    component:LinkGeneratorComponent
  },
  {
    path:'committee',
    component:CommiteeComponent
  },
  {
    path: 'comm-details/:id',
    component: CommDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
