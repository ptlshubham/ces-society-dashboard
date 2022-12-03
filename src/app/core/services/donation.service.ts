import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DonationService {
    constructor(
        private http: HttpClient
    ) { }


    saveDonnerDetails(data: any) {
         
        return this.http.post(ApiService.saveDonnerListDetailsURL, data);
    }

    getAllDonnerDetailsData() {
        return this.http.get(ApiService.getAllDonnerListURL);
    }
    removeStaffDetailsById(id: any) {
         
        return this.http.get(ApiService.removeStaffDetailsByIdURL + id);
    }
    saveBeneficiaryDetails(data: any) {
         debugger
        return this.http.post(ApiService.saveBeneficiaryDetailsURL, data);
    }
    getAllBeneficiaryDetailsData() {
        return this.http.get(ApiService.getAllBeneficiaryListURL);
    }
    saveBulkBeneficiaryDetails(data: any) {
        debugger
        return this.http.post(ApiService.saveBulkBeneficiaryDetailsURL, data);
    }
}