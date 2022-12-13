import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.scss']
})
export class StudentResultComponent implements OnInit {
  imageUrl: any = "assets/images/file-upload-image.jpg";

  editFile: boolean = true;
  removeUpload: boolean = false;
  cardImageBase64: any;
  resultImage: any;

  resultModel: any = {};
  resultData: any = [];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getResultDataById();
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


        this.homeService.uploadBannersImage(formdata).subscribe((response) => {
          this.resultImage = response;

          this.editFile = false;
          this.removeUpload = true;
        })
      }
      // ChangeDetectorRef since file is loading outside the zone
      // this.cd.markForCheck();

    }
  }
  saveResultDetails() {
    this.resultModel.image = this.resultImage;
    this.resultModel.institute_id = localStorage.getItem('InstituteId');

    this.homeService.saveResultData(this.resultModel).subscribe((res: any) => {
      this.resultData = res;
      this.getResultDataById();

    })
  }
  getResultDataById() {
    this.homeService.getResultDetailsById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.resultData = res;
      debugger
    })
  }
}
