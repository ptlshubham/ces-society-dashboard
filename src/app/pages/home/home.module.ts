import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormModule } from '../form/form.module';
import { NewsComponent } from './news/news.component';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { OthersComponent } from './others/others.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { BlogComponent } from './blog/blog.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CollegeListComponent } from './college-list/college-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import { NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbToastModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { DonationComponent } from './donation/donation.component';
import { RahotkarshComponent } from './rahotkarsh/rahotkarsh.component';
import { RahotkarshBulkUploadComponent } from './rahotkarsh-bulk-upload/rahotkarsh-bulk-upload.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};


@NgModule({
  declarations: [
    ImageUploadComponent,
    NewsComponent,
    StaffDetailsComponent,
    StudentDetailsComponent,
    OthersComponent,
    StudentResultComponent,
    InfrastructureComponent,
    BlogComponent,
    CollegeListComponent,
    DepartmentComponent,
    DonationComponent,
    RahotkarshComponent,
    RahotkarshBulkUploadComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgbAlertModule,
    DropzoneModule,
    NgbDropdownModule,
    NgbCarouselModule,
    NgbProgressbarModule,
    NgbNavModule,
    NgbCollapseModule,
    NgbAccordionModule,
    NgbPopoverModule,
    NgbTooltipModule,
    NgbPaginationModule,
    NgbToastModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class HomeModule { }
