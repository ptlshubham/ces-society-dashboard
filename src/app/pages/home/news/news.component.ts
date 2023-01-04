import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @ViewChild('fileInput') el!: ElementRef;
  newsModel: any = {};
  newsData: any = [];
  public Editor = ClassicEditor;
  isOpen: boolean = false;

  pdfResponse: any = '';

  page = 1;
  pageSize = 10;
  collectionSize = 0;
  paginateData: any = [];

  constructor(
    private homeService: HomeService,
    public toastr: ToastrService

  ) { }


  ngOnInit(): void {
    this.getNewsDetails();
  }
  openAddNews() {
    this.isOpen = true;
  }
  closeAddNews() {
    this.isOpen = false;
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
    if (this.pdfResponse != "") {
      this.newsModel.files = this.pdfResponse;
    }
    else {
      this.newsModel.files = null;
    }
    this.newsModel.institute_id = localStorage.getItem('InstituteId');
    this.homeService.saveNewsListData(this.newsModel).subscribe((res: any) => {
      this.toastr.success('News added successfully', 'Success', {
        timeOut: 3000,
      });
      this.getNewsDetails();
      this.isOpen = false;

    })
  }
  getNewsDetails() {
    this.homeService.getNewsDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.newsData = res;
      for (let i = 0; i < this.newsData.length; i++) {
        this.newsData[i].index = i + 1;
      }
      this.collectionSize = this.newsData.length;
      this.getPagintaion();
    })
  }
  getPagintaion() {
    this.paginateData = this.newsData
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

  }
  activeNews(ind: any) {
    let inde = ind - 1;
    this.newsData[inde].isactive = true;
    this.homeService.activeDeavctiveNews(this.newsData[inde]).subscribe((req) => {
      this.toastr.success('News/Event activated Successfully.', 'Activated', {
        timeOut: 3000,
      });
    })
  }
  deactiveNews(ind: any) {
    let inde = ind - 1;
    this.newsData[inde].isactive = false;
    this.homeService.activeDeavctiveNews(this.newsData[inde]).subscribe((req) => {
      this.toastr.error('News/Event deactivated Successfully.', 'Deactivated', {
        timeOut: 3000,
      });
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
