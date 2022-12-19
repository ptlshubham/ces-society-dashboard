import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() fileContent: any;

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBlogDetails();
  }
  uploadFile(event: any) {
    let reader = new FileReader();
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
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
    }
  }
  saveBlogData() {
    this.createTextFile(this.blogModel.blogDetails, 'Blog' + '.txt', 'text/plain');

    this.blogModel.institute_id = localStorage.getItem('InstituteId')
    this.blogModel.blogImage = this.blogImages;
    debugger
    // this.homeService.saveBlogDetails(this.blogModel).subscribe((res) => {
    //   this.blogsData = res;
    //   this.getBlogDetails();
    // })
  }
  createTextFile(content: any, fileName: any, contentType: any) {
    var a = document.createElement('a');
    var file = new Blob([content], { type: contentType });
    debugger
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  uploadPdfFile(event: any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    debugger
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        const formdata = new FormData();
        formdata.append('file', file);

        // this.homeService.savePdfData(formdata).subscribe((response) => {
        //   this.pdfResponse = response;
        // })
      }


    }
  }
  getBlogDetails() {
    this.homeService.getBlogsById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.blogsData = res;
      debugger
    })
  }
  viewBlogDetails(id: any) {
    this.router.navigate(['/home/details', id]);
  }
  editBlogDetails(data: any) {
    this.blogModel = data;

  }
}
