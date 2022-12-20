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
    removeInstituteList(id: any) {
        return this.http.get(ApiService.removeInstituteDetailsByIdURL + id);
    }
    updateInstituteDetails(data: any) {
        return this.http.post(ApiService.updateInstituteDetailsURL, data);
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
    uploadBlogImage(img: any): Observable<any> {
        return this.http.post<any>(ApiService.uploadBlogImagesURL, img);
    }
    saveBlogDetails(data: any) {
        return this.http.post(ApiService.saveBlogDetailsURL, data);
    }
    updateBlogDetails(data: any) {
        return this.http.post(ApiService.updateBlogDetailsURL, data);
    }
    removeBlog(id: any) {
        return this.http.get(ApiService.removeBlogDetailsURL + id);
    }
    getBlogsById(id: any) {
        return this.http.get(ApiService.getBlogsDetailsByIdURL + id);
    }
    uploadOInfraImage(img: any): Observable<any> {
        return this.http.post<any>(ApiService.uploadInfraImageURL, img);
    }
    saveInfrastructureDetails(data: any) {
        return this.http.post(ApiService.saveInfrastructureDetailsURL, data);
    }
    getImfraDetails(id: any) {
        return this.http.get(ApiService.getInfraDetailsByIdURL + id);
    }
    getAlumniList() {
        return this.http.get(ApiService.GetAlumniDetailsURL);
    }
    getContactUsDetails(id: any) {
        return this.http.get(ApiService.getContactUsDetailsByIdURL + id);
    }
    saveResultData(data: any) {
        return this.http.post(ApiService.saveResultDetailsURL, data);
    }
    updateResultDetails(data: any) {
        return this.http.post(ApiService.updateResultDetailsURL, data);
    }
    removeResultDetailsById(id: any) {
        return this.http.get(ApiService.removeResultDetailsByIdURL + id);
    }
    getResultDetailsById(id: any) {
        return this.http.get(ApiService.getResultDetailsByIdURL + id);
    }
    savePdfData(data: any) {
        return this.http.post(ApiService.uploadPDFURL, data);
    }
    saveNewsListData(data: any) {
        return this.http.post(ApiService.saveNewsDataListURL, data);
    }
    getNewsDataById(institute_id: any) {
        return this.http.get(ApiService.getNewsByIdDetailsURL + institute_id);
    }
    removeNewsDataById(id: any) {
        return this.http.get(ApiService.removeNewsByIdDetailsURL + id);
    }
    saveOthersListData(data: any) {
        return this.http.post(ApiService.saveOthersDataListURL, data);
    }
    removeOtherList(id: any) {
        return this.http.get(ApiService.removeOtherDetailsByIdURL + id);
    }
    getothersDataById(institute_id: any) {
        return this.http.get(ApiService.getOthersByIdDetailsURL + institute_id);
    }
}