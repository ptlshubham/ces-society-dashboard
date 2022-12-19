import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DonationService } from 'src/app/core/services/donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
  donataionModel: any = {};
  donnerData: any = [];
  constructor(
    private donationService: DonationService,
    private router: Router,
    public toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.getAllDonnerDetails();
  }
  goToBulkUpload() {
    this.router.navigate(['/home/donation-bulk']);
  }
  saveDonnerDetails() {
    this.donationService.saveDonnerDetails(this.donataionModel).subscribe((res: any) => {
      this.donnerData = res;
      this.toastr.success('Donner Data save Successfully', 'Success', {
        timeOut: 3000,
      });
      this.getAllDonnerDetails();
    })
  }
  getAllDonnerDetails() {
    this.donationService.getAllDonnerDetailsData().subscribe((res: any) => {
      this.donnerData = res;
    })
  }
  removeDonnerDetails(id: any) {
    this.donationService.removeDonnerDetailsById(id).subscribe((res: any) => {
      this.toastr.success('Donner details removed Successfully', 'Removed', {
        timeOut: 3000,
      });
      this.getAllDonnerDetails();
    })
  }
}
