import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    private staffService: StaffService,
    private datepipe: DatePipe,
    public toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.getDepartmentDetails();
    this.getStaffDetails();

  }
  openAddStaff() {
    this.isOpen = true;
    this.isUpdate = false;
  }
  backToTable() {
    this.isOpen = false;
    this.isUpdate = false;

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
          this.toastr.success('Image Uploaded Successfully', 'Uploaded', { timeOut: 3000, });

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
    this.staffService.saveStaffDetails(this.staffModel).subscribe((res: any) => {
      this.staffData = res;
      this.toastr.success('Staff Details Successfully Saved.', 'Success', { timeOut: 3000, });

      this.getStaffDetails();
      this.isOpen = false;
    })
  }
  getStaffDetails() {
    this.staffService.getAllStaffDetailsData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.staffDataTable = res;
    })
  }
  openUpdateStaff(data: any) {
    this.staffModel.birthday_date = this.datepipe.transform(data.birthday_date, 'yyyy-MM-dd');
    this.staffModel.joining_date = this.datepipe.transform(data.joining_date, 'yyyy-MM-dd');
    this.imageUrl = 'http://localhost:9000' + data.profile_image
    this.staffModel = data;
    this.staffModel.profile = data.profile_image;
    this.isOpen = true;
    this.isUpdate = true;
  }
  updateStaffDetails() {
    if (this.staffProfileImage != null || undefined) {
      this.staffModel.profile = this.staffProfileImage;
    }

    debugger
    this.staffService.updaetStaffDetails(this.staffModel).subscribe((res: any) => {
      this.staffData = res;
      this.toastr.success('Update Staff Details Successfully.', 'Updated', { timeOut: 3000, });

      this.getStaffDetails();
      this.isOpen = false;
    })
  }
  removeStaffDetails(id: any) {
    this.staffService.removeStaffDetailsById(id).subscribe((res: any) => {
      this.staffDataTable = res;
      this.toastr.success('Staff Details Removed Successfully.', 'Removed', { timeOut: 3000, });

      this.getStaffDetails();
    })
  }
}
