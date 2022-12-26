import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {
  magazineModel: any = {};
  magazine: any = [];
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
    this.getMagazineDetails();
  }
  saveMagazineDetails() {
    if (this.pdfResponse != "") {
      this.magazineModel.files = this.pdfResponse;
    }
    else {
      this.magazineModel.files = null;
    }
    this.homeService.saveMagazineDetails(this.magazineModel).subscribe((res: any) => {
      this.toastr.success('Magazine added Successfully', 'Success', {
        timeOut: 3000,
      });
      this.getMagazineDetails();
    })
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
          this.toastr.success('Files uploaded Successfully', 'Uploaded', {
            timeOut: 3000,
          });
        })
      }
    }
  }
  viewDownloadPdf(data: any) {
    var path
    path = 'http://localhost:9000' + data

    window.open(path, '_blank');
  }
  removeMagazineDetails(id: any) {
    this.homeService.removeMagazineList(id).subscribe((res: any) => {
      this.magazine = res;
      this.toastr.success('Magazine Deleted Successfully', 'Removed', {
        timeOut: 3000,
      });
      this.getMagazineDetails();
    })
  }
  getMagazineDetails() {
    this.homeService.getMagazineList().subscribe((res: any) => {
      this.magazine = res;
      for (let i = 0; i < this.magazine.length; i++) {
        this.magazine[i].index = i + 1;
      }
      this.collectionSize = this.magazine.length;
      this.getPagintaion();
    })
  }
  getPagintaion() {
    this.paginateData = this.magazine
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
