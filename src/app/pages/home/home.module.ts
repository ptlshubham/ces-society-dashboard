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
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormModule,
    CKEditorModule,
    DropzoneModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class HomeModule { }
