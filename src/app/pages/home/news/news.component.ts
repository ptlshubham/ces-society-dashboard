import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @ViewChild('fileInput') el!: ElementRef;
  newsModel: any = {};
  newsData: any = [];
  pdfResponse: any = '';
  constructor(
    private homeService: HomeService,
    public toastr: ToastrService

  ) { }


  ngOnInit(): void {
    this.getNewsDetails();
  }

  uploadFile(event: any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        const formdata = new FormData();
        formdata.append('file', file);

        this.homeService.savePdfData(formdata).subscribe((response) => {
          this.pdfResponse = response;
          this.toastr.success('Image uploaded successfully', 'Uploaded', {
            timeOut: 3000,
          });
           

        })
      }
      // ChangeDetectorRef since file is loading outside the zone
      // this.cd.markForCheck();

    }
  }
  saveNewsDetails() {
    this.newsModel.files = this.pdfResponse;
     
    this.newsModel.institute_id = localStorage.getItem('InstituteId');
    this.homeService.saveNewsListData(this.newsModel).subscribe((res: any) => {
      this.toastr.success('News added successfully', 'Success', {
        timeOut: 3000,
      });
      this.getNewsDetails();
    })
  }
  getNewsDetails() {
    this.homeService.getNewsDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.newsData = res;
    })
  }
  removeNewsById(id: any) {
    this.homeService.removeNewsDataById(id).subscribe((res: any) => {
      this.newsData = res;
      this.toastr.success('News deleted successfully', 'Deleted', {
        timeOut: 3000,
      });
      this.getNewsDetails();
    })
  }
  viewDownloadPdf(data: any) {
    var path
    path = 'http://localhost:9000' + data
     
    window.open(path, '_blank');
  }
}
