import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';
import { StaffService } from 'src/app/core/services/staff.services';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.scss']
})
export class StaffDetailsComponent implements OnInit {
  @ViewChild('fileInput') el!: ElementRef;
  imageUrl: any = "assets/images/file-upload-image.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  cardImageBase64: any;
  staffProfileImage: any;
  departmentData: any = [];
  staffModel: any = {};
  staffData: any = [];
  staffDataTable: any = [];
  isOpen: boolean = false;
  isUpdate: boolean = false;

  constructor(
    private homeService: HomeService,
    private staffService: StaffService
  ) { }

  ngOnInit(): void {
    this.getDepartmentDetails();
    this.getStaffDetails();

  }
  openAddStaff() {
    this.isOpen = true;
  }
  backToTable() {
    this.isOpen = false;

  }
  getDepartmentDetails() {
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
        this.imageUrl = reader.result;
        const imgBase64Path = reader.result;
        this.cardImageBase64 = imgBase64Path;
        const formdata = new FormData();
        formdata.append('file', file);


        this.staffService.saveStaffProfileImages(formdata).subscribe((response) => {
          this.staffProfileImage = response;

          this.editFile = false;
          this.removeUpload = true;
        })
      }
      // ChangeDetectorRef since file is loading outside the zone
      // this.cd.markForCheck();

    }
  }
  saveStaffDetails() {
    this.staffModel.institute_id = localStorage.getItem('InstituteId');
    this.staffModel.profile = this.staffProfileImage;
    debugger
    this.staffService.saveStaffDetails(this.staffModel).subscribe((res: any) => {
      this.staffData = res;
      this.getStaffDetails();
    })
  }
  getStaffDetails() {
    this.staffService.getAllStaffDetailsData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.staffDataTable = res;
      debugger
    })
  }
  openUpdateStaff(data: any) {
    this.imageUrl='http://localhost:9000'+data.profile_image
    this.staffModel = data;
    this.isOpen = true;
    this.isUpdate = true;
  }
  updateStaffDetails() {

  }
  removeStaffDetails(id: any) {
    debugger
    this.staffService.removeStaffDetailsById(id).subscribe((res: any) => {
      this.staffDataTable = res;
      this.getStaffDetails();
    })
  }
}
