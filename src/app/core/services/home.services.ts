import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class HomeService {
    constructor(
        private http: HttpClient
    ) { }


    saveInstituteData(data: any) {
        debugger
        return this.http.post(ApiService.saveInsituteDetailsURL, data);
    }

    getAllInstituteData() {
        return this.http.get(ApiService.getAllInstituteDetailsURL);
    }

    // saveSellerTradeRequest(data: any) {
    //     debugger
    //     return this.http.post(ApiService.saveSellerTradeRequestURL, data);
    // }

    // getAllTradingDatabyIdForSeller(id: any) {
    //     let data = {
    //         uid: id
    //     };
    //     return this.http.post(ApiService.getAllTradingDatabyIdForSellerURL, data);
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
    // inoviceRecieptImage(img: any): Observable<any> {
    //     return this.http.post<any>(ApiService.invoiceRecieptImageUploadURL, img);

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