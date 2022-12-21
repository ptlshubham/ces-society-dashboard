import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  studentList: any = [];
  studentModel: any = {};
  studentDetails: any = {};
  public Editor = ClassicEditor;
  isOpen: boolean = false;
  isAdd: boolean = false;
  isUpdate: boolean = false;
  isOpenDetails: boolean = false;

  constructor(
    private homeService: HomeService,
    public toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.getStudentListDetails();
    this.isOpen = true;

  }
  openDetails() {
    this.isOpen = false;
    this.isOpenDetails = false;
    this.isAdd = true;

  }
  closeDetails() {
    this.isOpen = true;
    this.isOpenDetails = false;
    this.isAdd = false;

  }
  getStudentListDetails() {
    this.homeService.getStudentList(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.studentList = res;
    })
  }
  saveStudentDetails() {

    this.studentModel.institute_id = localStorage.getItem('InstituteId');
    this.homeService.saveStudentDetails(this.studentModel).subscribe((res: any) => {
      this.toastr.success('Student Details added successfully', 'Success', {
        timeOut: 3000,
      });
      this.isOpen = true;
      this.isOpenDetails = false;
      this.isAdd = false;
      this.getStudentListDetails();
    })
  }
  removeStudentListDetails(id: any) {
    this.homeService.removeStudentList(id).subscribe((res: any) => {
      this.studentList = res;
      this.toastr.success('Student list deleted successfully', 'Removed', {
        timeOut: 3000,
      });
      this.getStudentListDetails();
    })
  }
  viewOpenDetails(data: any) {
    this.studentDetails = data;
    this.isOpen = false;
    this.isOpenDetails = true;
    this.isUpdate = false;
  }
  closeStudDetails() {
    this.isOpen = true;
    this.isOpenDetails = false;
    this.isAdd = false;

  }
  editStudentlist(data: any) {
    this.studentModel = data;
    this.isAdd = true;
    this.isOpen = false;
    this.isOpenDetails = false;
    this.isUpdate = true;

  }
  updateStudentDetails() {
    this.homeService.updateStudentDetails(this.studentModel).subscribe((res: any) => {
      this.toastr.success('Student Details updated successfully', 'Updated', {
        timeOut: 3000,
      });
      this.isOpen = true;
      this.isOpenDetails = false;
      this.isAdd = false;
      this.isUpdate = false;
      this.getStudentListDetails();
    })
  }
}
