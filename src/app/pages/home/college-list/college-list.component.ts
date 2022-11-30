import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.scss']
})
export class CollegeListComponent implements OnInit {
  public instituteModel: any = {};
  collegeList: any = [];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getAllInstituteDetails();
  }
  saveInstituteDetails() {
    if (this.instituteModel.contact ==undefined) {
      this.instituteModel.contact = null;
    }
    this.homeService.saveInstituteData(this.instituteModel).subscribe((res: any) => {
      this.getAllInstituteDetails();
    })
  }
  getAllInstituteDetails() {
    this.homeService.getAllInstituteData().subscribe((res: any) => {
      this.collegeList = res;
    })
  }
}
