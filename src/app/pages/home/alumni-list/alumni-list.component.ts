import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-alumni-list',
  templateUrl: './alumni-list.component.html',
  styleUrls: ['./alumni-list.component.scss']
})
export class AlumniListComponent implements OnInit {
  alumniData: any = [];

  page = 1;
  pageSize = 10;
  collectionSize = 0;
  paginateData: any = [];

  constructor(
    private homeService: HomeService
  ) {
    this.getAlumniDetails();
  }

  ngOnInit(): void {
  }
  getAlumniDetails() {
    this.homeService.getAlumniList().subscribe((res: any) => {
      this.alumniData = res;
      for (let i = 0; i < this.alumniData.length; i++) {
        this.alumniData[i].index = i + 1;
      }
      this.collectionSize = this.alumniData.length;
      this.getPagintaion();
    })
  }
  getPagintaion() {
    this.paginateData = this.alumniData
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
