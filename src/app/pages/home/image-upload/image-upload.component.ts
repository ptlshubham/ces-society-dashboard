import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  @ViewChild('fileInput') el!: ElementRef;

  imageUrl: any = "assets/images/file-upload-image.jpg";

  editFile: boolean = true;
  removeUpload: boolean = false;
  cardImageBase64: any;
  bannersImage: any;
  public imageModel: any = {};
  imagesData: any = [];

  page = 1;
  pageSize = 10;
  collectionSize = 0;
  paginateData: any = [];

  constructor(
    public formBuilder: UntypedFormBuilder,
    private homeService: HomeService,
    public toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.getImagesDataById();
  }
  saveGalleryDetails() {
    this.imageModel.image = this.bannersImage;
    this.imageModel.institute_id = localStorage.getItem('InstituteId');

    this.homeService.saveBannersImagesData(this.imageModel).subscribe((res: any) => {
      this.toastr.success('Images Data added Successfully', 'success', {
        timeOut: 3000,
      });
      this.getImagesDataById();
    })
  }
  getImagesDataById() {
    this.homeService.getBannersImagesById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.imagesData = res;
      for (let i = 0; i < this.imagesData.length; i++) {
        this.imagesData[i].index = i + 1;
      }
      this.collectionSize = this.imagesData.length;
      this.getPagintaion();
    })
  }
  getPagintaion() {
    this.paginateData = this.imagesData
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

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
          this.bannersImage = response;
          this.toastr.success('Image Uploaded Successfully', 'Uploaded', {
            timeOut: 3000,
          });
          this.editFile = false;
          this.removeUpload = true;
        })
      }
      // ChangeDetectorRef since file is loading outside the zone
      // this.cd.markForCheck();

    }
  }
  uploadVideoFile(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('video', file);

    this.homeService.uploadVideoImage(formData).subscribe((response) => {
      this.bannersImage = response;
      this.toastr.success('Video Uploaded Successfully', 'Uploaded', {
        timeOut: 3000,
      });
    })

  }
  activeBanners(ind: any) {
    let inde = ind - 1;
    this.imagesData[inde].isactive = true;
    this.homeService.activeDeavctiveBanners(this.imagesData[inde]).subscribe((req) => {
      this.toastr.success('Images activated Successfully.', 'Activated', {
        timeOut: 3000,
      });
    })
  }
  deactiveBanners(ind: any) {
    let inde = ind - 1;
    this.imagesData[inde].isactive = false;
    this.homeService.activeDeavctiveBanners(this.imagesData[inde]).subscribe((req) => {
      this.toastr.error('Images deactivated Successfully.', 'Deactivated', {
        timeOut: 3000,
      });
    })
  }
  removeBannersImages(id: any) {
    this.homeService.removeBannersImagesById(id).subscribe((res: any) => {
      this.imagesData = res;
      this.toastr.success('Image Delete Successfully.', 'Deleted', {
        timeOut: 3000,
      });
      this.getImagesDataById();
    })
  }

}
