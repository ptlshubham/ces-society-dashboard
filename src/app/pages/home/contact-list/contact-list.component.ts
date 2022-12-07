import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contactData: any = [];
  constructor(
    private homeService: HomeService
  ) {
    this.getContactUsDetails();
   }

  ngOnInit(): void {
  }
  getContactUsDetails() {
    this.homeService.getContactUsDetails(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.contactData = res;
    })
  }
}
