import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {
    constructor(
        private http: HttpClient
    ) { }

    saveInstituteData(data: any) {
        return this.http.post(ApiService.saveInsituteDetailsURL, data);
    }

    getAllInstituteData() {
        return this.http.get(ApiService.getAllInstituteDetailsURL);
    }

    saveBannersImagesData(data: any) {

        return this.http.post(ApiService.saveGalleryImagesURL, data);
    }
    uploadBannersImage(img: any): Observable<any> {
        return this.http.post<any>(ApiService.uploadGalleryImagesURL, img);
    }
    getBannersImagesById(id: any) {
        let data = {
            institute_id: id
        };
        return this.http.post(ApiService.getImagesByIdDetailsURL, data);
    }
    activeDeavctiveBanners(data: any): Observable<any> {
        return this.http.post<any>(ApiService.updateActiveDeactiveBannersURL, data);
    }
    removeBannersImagesById(id: any) {
        let data = {
            id: id
        };
        return this.http.post(ApiService.removeImagesByIdDetailsURL, data);
    }
    saveDepartmentListData(data: any) {

        return this.http.post(ApiService.saveDepartmentListURL, data);
    }
    getDepartmentDataById(institute_id: any) {
        return this.http.get(ApiService.getDepartmentByIdDetailsURL + institute_id);
    }
    removeDepartmentDataById(institute_id: any) {
        return this.http.get(ApiService.removeDepartmentByIdDetailsURL + institute_id);
    }
    updateDepartmentListData(data: any) {

        return this.http.post(ApiService.updateDepartmentListURL, data);
    }
    // saveSellerTradeRequest(data: any) {
    //      
    //     return this.http.post(ApiService.saveSellerTradeRequestURL, data);
    // }



    // newTradeReqForSeller() {
    //     let data = {
    //         mat_qlty: localStorage.getItem('material_quality')
    //     };
    //     return this.http.post(ApiService.getNewTradingReqForSellerURL, data);
    // }
    // comissionPaymentForBuyer(data: any) {
    //     return this.http.post(ApiService.newComissionPaymentForBuyerURL, data);

    // }
    // comissionPaymentForSeller(data: any) {
    //     return this.http.post(ApiService.newComissionPaymentForSellerURL, data);

    // }
    // uploadWeightSlipImage(img: any): Observable<any> {
    //     return this.http.post<any>(ApiService.uploadWeightSlipImageURL, img);

    // }

    // uploadDeliveryRecieptImage(img: any): Observable<any> {
    //     return this.http.post<any>(ApiService.uploadDeliveryRecieptImageURL, img);

    // }
    // saveTransporterDetails(data: any) {

    //     return this.http.post(ApiService.saveTransporterDetailsURL, data);
    // }
    // getTransporterDetailsbyIdForSeller(id: any) {
    //     let data = {
    //         tradeId: id
    //     };
    //     return this.http.post(ApiService.getTransporterDetailsbyIdForSellerURL, data);
    // }
    // SaveDeliveryRecieptData(data: any) {

    //     return this.http.post(ApiService.saveDileveryRecieptDataURL, data);
    // }


}