import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-alumni-list',
  templateUrl: './alumni-list.component.html',
  styleUrls: ['./alumni-list.component.scss']
})
export class AlumniListComponent implements OnInit {
  alumniData: any = [];
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
       
    })
  }

}
