import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-question-papers',
  templateUrl: './question-papers.component.html',
  styleUrls: ['./question-papers.component.scss']
})
export class QuestionPapersComponent implements OnInit {
  questionPapersModel: any = {};
  questionPapers: any = [];
  departmentData: any = [];
  pdfResponse: any = '';
  yearList: any = [];
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  paginateData: any = [];
  constructor(
    private homeService: HomeService,
    public toastr: ToastrService,

  ) {
    this.getYears();
  }

  ngOnInit(): void {
    this.getPapersDetails();
    this.getDepartmentDetails();
  }
  getYears(): number[] {
    let currentYear = new Date().getFullYear();
    let years = [];
    this.yearList = [];
    for (let i = currentYear - 25; i <= currentYear; i++) {
      years.push(i);
    }
    this.yearList = years;
    debugger
    return years;

  }

  getDepartmentDetails() {
    this.departmentData = [];
    this.homeService.getDepartmentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.departmentData = res;
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
        })
      }


    }
  }

  savePapersDetails() {
    if (this.pdfResponse != "") {
      this.questionPapersModel.files = this.pdfResponse;
    }
    else {
      this.questionPapersModel.files = null;
    }

    this.questionPapersModel.institute_id = localStorage.getItem('InstituteId');
    this.homeService.saveQuestionDetails(this.questionPapersModel).subscribe((res: any) => {
      this.questionPapers = res;
      this.toastr.success('Others Details added Successfully.', 'Saved', { timeOut: 3000, });
      this.getPapersDetails();
    })
  }
  getPapersDetails() {
    this.homeService.getQuestionData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.questionPapers = res;

      for (let i = 0; i < this.questionPapers.length; i++) {
        this.questionPapers[i].index = i + 1;
      }
      this.collectionSize = this.questionPapers.length;
      this.getPagintaion();
    })
  }
  getPagintaion() {
    this.paginateData = this.questionPapers
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  removeQuestionPaper(id: any) {
    this.homeService.removeQuestionDetails(id).subscribe((res: any) => {
      this.questionPapers = res;
      this.getPapersDetails();
    })
  }
  viewDownloadPdf(data: any) {
    var path
    path = 'http://localhost:9000' + data

    window.open(path, '_blank');
  }
}
