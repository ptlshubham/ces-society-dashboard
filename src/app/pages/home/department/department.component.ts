import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departmentModel: any = {};
  updateDepartmentModel: any = {};
  departmentData: any = [];
  constructor(
    private homeService: HomeService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getDepartmentDetails();

  }
  saveDepartmentList() {
    this.departmentModel.institute_id = localStorage.getItem('InstituteId');
    this.homeService.saveDepartmentListData(this.departmentModel).subscribe((res: any) => {
      this.getDepartmentDetails();
    })
  }
  getDepartmentDetails() {
    this.homeService.getDepartmentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.departmentData = res;
    })
  }

  editDepartmentDetails(smallDataModal: any, data: any) {
    this.modalService.open(smallDataModal, { size: 'sm', windowClass: 'modal-holder', centered: true });
    this.updateDepartmentModel = data;
    this.getDepartmentDetails();

  }
  updateDepartmentDetails() {
    this.homeService.updateDepartmentListData(this.updateDepartmentModel).subscribe((res: any) => {
      if(res=='success'){
        location.reload();
      }
    })
  }
  removeDepartmentdata(id: any) {
    this.homeService.removeDepartmentDataById(id).subscribe((res: any) => {
      this.departmentData = res;
      this.getDepartmentDetails();
    })
  }

}
