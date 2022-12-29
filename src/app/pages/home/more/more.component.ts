import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
  public Editor = ClassicEditor;

  imageUrl: any = "assets/images/file-upload-image.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  cardImageBase64: any;
  otherImages: any;
  moreModel: any = {};
  moreData: any = [];

  page = 1;
  pageSize = 10;
  collectionSize = 0;
  paginateData: any = [];
  constructor(
    private homeService: HomeService,
    public toastr: ToastrService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getScholarshipData();
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


        this.homeService.uploadMoreImage(formdata).subscribe((response: any) => {
          this.otherImages = response;

          this.editFile = false;
          this.removeUpload = true;
        })
      }
      // ChangeDetectorRef since file is loading outside the zone
      // this.cd.markForCheck();

    }
  }
  saveScholarshipDetails() {
    this.moreModel.institute_id = localStorage.getItem('InstituteId');
    this.moreModel.image = this.otherImages
    this.homeService.saveScholarshipDetails(this.moreModel).subscribe((res: any) => {
      this.moreData = res;
      this.toastr.success('Others Details added Successfully.', 'Saved', { timeOut: 3000, });
      this.getScholarshipData();
    })
  }
  getScholarshipData() {
    this.homeService.getScholarshipData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.moreData = res;
      debugger
      for (let i = 0; i < this.moreData.length; i++) {
        this.moreData[i].index = i + 1;
      }
      this.collectionSize = this.moreData.length;
      this.getPagintaion();
    })
  }
  getPagintaion() {
    this.paginateData = this.moreData
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  removeScholarship(id: any) {
    this.homeService.removeScholarshipData(id).subscribe((res: any) => {
      this.moreData = res;
      this.getScholarshipData();
    })
  }
  viewMoreDetails(id: any) {
    this.router.navigate(['/home/more-details', id]);
  }
}
