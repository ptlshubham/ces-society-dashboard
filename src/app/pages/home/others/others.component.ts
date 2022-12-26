import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {
  othersModel: any = {};
  othersData: any = [];
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
    this.getFormsDetails();
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
        })
      }


    }
  }
  saveFormsDetails() {
    if (this.pdfResponse != "") {
      this.othersModel.files = this.pdfResponse;
    }
    else {
      this.othersModel.files = null;
    }

    this.othersModel.institute_id = localStorage.getItem('InstituteId');
    this.homeService.saveOthersListData(this.othersModel).subscribe((res: any) => {
      this.toastr.success('News added Successfully', 'success', {
        timeOut: 3000,
      });
      this.getFormsDetails();
    })
  }
  getFormsDetails() {
    this.homeService.getothersDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.othersData = res;
      for (let i = 0; i < this.othersData.length; i++) {
        this.othersData[i].index = i + 1;
      }
      this.collectionSize = this.othersData.length;
      this.getPagintaion();
    })
  }
  getPagintaion() {
    this.paginateData = this.othersData
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  removeOtherDetails(id: any) {
    this.homeService.removeOtherList(id).subscribe((res: any) => {
      this.othersData = res;
      this.toastr.success('Deleted Successfully', 'Removed', {
        timeOut: 3000,
      });
      this.getFormsDetails();
    })
  }
  viewDownloadPdf(data: any) {
    var path
    path = 'http://localhost:9000' + data

    window.open(path, '_blank');
  }

}
