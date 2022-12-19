import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.scss']
})
export class CollegeListComponent implements OnInit {
  public instituteModel: any = {};
  collegeList: any = [];
  isupdate: boolean = false;
  constructor(
    private homeService: HomeService,
    public toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.getAllInstituteDetails();
  }
  saveInstituteDetails() {
    if (this.instituteModel.contact == undefined) {
      this.instituteModel.contact = null;
    }
    this.homeService.saveInstituteData(this.instituteModel).subscribe((res: any) => {
      this.toastr.success('Institute details save Successfully', 'Success', {
        timeOut: 3000,
      });
      this.getAllInstituteDetails();
    })
  }
  getAllInstituteDetails() {
    this.homeService.getAllInstituteData().subscribe((res: any) => {
      this.collegeList = res;
    })
  }
  editInstituteDetails(data: any) {
    this.isupdate = true;
    this.instituteModel = data;
  }
  updateInstituteDetails() {
    if (this.instituteModel.contact == undefined) {
      this.instituteModel.contact = null;
    }
    this.homeService.updateInstituteDetails(this.instituteModel).subscribe((res: any) => {
      this.toastr.success('Institute details updated Successfully', 'Updated', {
        timeOut: 3000,
      });
      this.getAllInstituteDetails();
    })
  }
  removeInstituteDetail(id: any) {
    this.homeService.removeInstituteList(id).subscribe((res: any) => {
      this.toastr.success('Institute details removed Successfully', 'Removed', {
        timeOut: 3000,
      });
      this.getAllInstituteDetails();
    })
  }
}
