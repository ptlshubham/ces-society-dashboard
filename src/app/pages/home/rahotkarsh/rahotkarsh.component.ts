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
  collegeList: any = [];
  constructor(
    private donationService: DonationService,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getAllInstituteDetails();
    this.getAllBeneficiaryDetails();
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
      this.beneficiaryData = res;
      debugger
    })
  }
}
