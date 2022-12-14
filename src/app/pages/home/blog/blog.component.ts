import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public Editor = ClassicEditor;
  blogsData: any = [];

  @ViewChild('fileInput') el!: ElementRef;
  imageUrl: any = "assets/images/file-upload-image.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  cardImageBase64: any;
  blogImages: any;
  blogModel: any = {};
  fileUrl: any;
  constructor(
    private homeService: HomeService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getBlogDetails();

  }
  uploadFile(event: any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        const imgBase64Path = reader.result;
        this.cardImageBase64 = imgBase64Path;
        const formdata = new FormData();
        formdata.append('file', file);


        this.homeService.uploadBlogImage(formdata).subscribe((response) => {
          this.blogImages = response;

          this.editFile = false;
          this.removeUpload = true;
        })
      }
      // ChangeDetectorRef since file is loading outside the zone
      // this.cd.markForCheck();

    }
  }
  saveBlogData() {
    const data = this.blogModel.blogDetails
    debugger
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

    this.blogModel.institute_id = localStorage.getItem('InstituteId')
    this.blogModel.blogImage = this.blogImages;
    debugger
    this.homeService.saveBlogDetails(this.blogModel).subscribe((res) => {
      this.blogsData = res;
      this.getBlogDetails();
    })
  }
  getBlogDetails() {
    this.homeService.getBlogsById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.blogsData = res;
      debugger
    })
  }
}
