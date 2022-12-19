import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent implements OnInit {
  public Editor = ClassicEditor;

  @ViewChild('fileInput') el!: ElementRef;
  imageUrl: any = "assets/images/file-upload-image.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  cardImageBase64: any;
  infraImages: any;
  infraData: any = [];
  infraModel: any = {};

  constructor(
    private homeService: HomeService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getInfraDataById();

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


        this.homeService.uploadOInfraImage(formdata).subscribe((response) => {
          this.infraImages = response;

          this.editFile = false;
          this.removeUpload = true;
        })
      }
      // ChangeDetectorRef since file is loading outside the zone
      // this.cd.markForCheck();

    }
  }
  saveInfraDetails() {
    this.infraModel.institute_id = localStorage.getItem('InstituteId');
    this.infraModel.infraImage = this.infraImages
    this.homeService.saveInfrastructureDetails(this.infraModel).subscribe((res: any) => {
      this.infraData = res;
      this.getInfraDataById();
    })
  }
  getInfraDataById() {
    this.homeService.getImfraDetails(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.infraData = res;
    })
  }
  viewInfraDetails(id: any) {
    this.router.navigate(['/home/infra-details', id]);
  }
}
