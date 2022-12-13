import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationService } from 'src/app/core/services/donation.service';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-rahotkarsh',
  templateUrl: './rahotkarsh.component.html',
  styleUrls: ['./rahotkarsh.component.scss']
})
export class RahotkarshComponent implements OnInit {
  beneficiaryModel: any = {};
  beneficiaryData: any = [];
  beneficiaryMain: any = [];
  paginateData: any = [];
  collegeList: any = [];
  selectedYear: any = '';
  yearData: any = [];
  page = 1;
  pageSize = 50;
  collectionSize = 0;

  constructor(
    private donationService: DonationService,
    private homeService: HomeService,
    private router: Router
  ) {
    this.getAllBeneficiaryYearList();
  }

  ngOnInit(): void {

    this.getAllInstituteDetails();
    this.getAllBeneficiaryDetails();
    this.selectedYear = 'Select Year'

  }
  goToBulkUpload() {
    this.router.navigate(['/home/rahotkarsh-bulk']);
  }
  getAllInstituteDetails() {
    this.homeService.getAllInstituteData().subscribe((res: any) => {
      this.collegeList = res;
    })
  }
  saveBeneficiaryDetails() {
    this.donationService.saveBeneficiaryDetails(this.beneficiaryModel).subscribe((res: any) => {
      this.beneficiaryData = res;
      this.getAllBeneficiaryDetails();
    })
  }
  getAllBeneficiaryDetails() {
    this.donationService.getAllBeneficiaryDetailsData().subscribe((res: any) => {
      this.beneficiaryMain = res;
      this.beneficiaryData = res;
      for (let i = 0; i < this.beneficiaryData.length; i++) {
        this.beneficiaryData[i].index = i + 1;
      }
      this.collectionSize = this.beneficiaryData.length;
      this.getPagintaion();

    })
  }
  removeBeneficiaryDetails(id: any) {
    this.donationService.removeBeneficiaryDetailsById(id).subscribe((res: any) => {
      this.getAllBeneficiaryDetails();
    })
  }
  getAllBeneficiaryYearList() {
    this.donationService.getAllBeneficiaryYear().subscribe((res: any) => {
      this.yearData = res;
    })
  }
  selectYear(val: any) {
    this.beneficiaryData = [];
    this.selectedYear = val;
    this.beneficiaryMain.forEach((element: any) => {
      if (element.year == this.selectedYear) {
        this.beneficiaryData.push(element);
      }
      for (let i = 0; i < this.beneficiaryData.length; i++) {
        this.beneficiaryData[i].index = i + 1;
      }
    });
    this.collectionSize = this.beneficiaryData.length;

  }
  getPagintaion() {
    this.paginateData = this.beneficiaryData
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

  }


}
