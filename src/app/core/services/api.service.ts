import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static HOST_URL: string = "http://localhost:9000";
  // public static HOST_URL: string = "https://bapsanandmandir.co.in";

  toasts: any[] = [];
  constructor(
    private http: HttpClient,
  ) { }
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //authenticate

  public static userLoginURL: string = ApiService.HOST_URL + '/authenticate/UserLogin';
  public static adminLoginURL: string = ApiService.HOST_URL + '/authenticate/AdminLogin';


  // admin

  public static saveInsituteDetailsURL: string = ApiService.HOST_URL + '/admin/SaveInsituteDetails';
  public static removeInstituteDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveInstituteDetailsById/';
  public static updateInstituteDetailsURL: string = ApiService.HOST_URL + '/admin/UpdateInstituteDetails';
  public static getAllInstituteDetailsURL: string = ApiService.HOST_URL + '/admin/GetAllInstituteDetails';
  public static saveGalleryImagesURL: string = ApiService.HOST_URL + '/admin/SaveGalleryImages';
  public static uploadGalleryImagesURL: string = ApiService.HOST_URL + '/admin/UploadGalleryImages';
  public static uploadGalleryVideoURL: string = ApiService.HOST_URL + '/admin/UploadGalleryVideo';
  public static getImagesByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetImagesByIdDetails';
  public static getALLImagesByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetALLImagesByIdDetails';
  public static updateActiveDeactiveBannersURL: string = ApiService.HOST_URL + '/admin/UpdateActiveDeactiveBanners';
  public static updateActiveDeactiveNewsURL: string = ApiService.HOST_URL + '/admin/UpdateActiveDeactiveNews'
  public static removeImagesByIdDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveImagesByIdDetails';
  public static saveDepartmentListURL: string = ApiService.HOST_URL + '/admin/SaveDepartmentList';
  public static getDepartmentByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetDepartmentByIdDetails/';
  public static removeDepartmentByIdDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveDepartmentByIdDetails/';
  public static updateDepartmentListURL: string = ApiService.HOST_URL + '/admin/UpdateDepartmentList';
  public static saveStaffProfileImagesURL: string = ApiService.HOST_URL + '/admin/SaveStaffProfileImages';
  public static saveStaffDetailsListURL: string = ApiService.HOST_URL + '/admin/SaveStaffDetailsList';
  public static updateStaffDetailsByIdURL: string = ApiService.HOST_URL + '/admin/UpdateStaffDetailsById';
  public static getAllStaffDetailsURL: string = ApiService.HOST_URL + '/admin/GetAllStaffDetails/';
  public static removeStaffDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveStaffDetailsById/';
  public static saveDonnerListDetailsURL: string = ApiService.HOST_URL + '/admin/SaveDonnerListDetails';
  public static getAllDonnerListURL: string = ApiService.HOST_URL + '/admin/GetAllDonnerList';
  public static removeDonnerDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveDonnerDetailsById/';
  public static getBeneficiaryYearURL: string = ApiService.HOST_URL + '/admin/GetBeneficiaryYear';
  public static saveBeneficiaryDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBeneficiaryDetails';
  public static updateBeneficiaryDetailsURL: string = ApiService.HOST_URL + '/admin/UpdateBeneficiaryDetails';
  public static getAllBeneficiaryListURL: string = ApiService.HOST_URL + '/admin/GetAllBeneficiaryList';
  public static removeBeneficiaryDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveBeneficiaryDetailsById/';
  public static saveBulkBeneficiaryDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBulkBeneficiaryDetails';
  public static saveBulkDonnersDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBulkDonnersDetails';
  public static saveBlogDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBlogDetails';
  public static updateBlogDetailsURL: string = ApiService.HOST_URL + '/admin/UpdateBlogDetails';
  public static getBlogsDetailsByIdURL: string = ApiService.HOST_URL + '/admin/GetBlogsDetailsById/'
  public static removeBlogDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveBlogDetails/';
  public static uploadBlogImagesURL: string = ApiService.HOST_URL + '/admin/uploadBlogImages';
  public static uploadInfraImageURL: string = ApiService.HOST_URL + '/admin/UploadInfraImage';
  public static uploadInfraMultiImageURL: string = ApiService.HOST_URL + '/admin/UploadInfraMultiImage';
  public static saveInfrastructureDetailsURL: string = ApiService.HOST_URL + '/admin/SaveInfrastructureDetails';
  public static getBlogsInfraMultiImageByIdURL: string = ApiService.HOST_URL + '/admin/GetInfraMultiImagesById/';
  public static updateInfraDetailsURL: string = ApiService.HOST_URL + '/admin/UpdateInfraDetails';
  public static removeInfraDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveInfraDetails/';
  public static getInfraDetailsByIdURL: string = ApiService.HOST_URL + '/admin/GetInfraDetailsById/';
  public static SaveAlumniDetailsURL: string = ApiService.HOST_URL + '/admin/SaveAlumniDetails';
  public static GetAlumniDetailsURL: string = ApiService.HOST_URL + '/admin/GetAlumniDetails';
  public static getContactUsDetailsByIdURL: string = ApiService.HOST_URL + '/admin/GetContactUsDetailsById/';
  public static saveResultDetailsURL: string = ApiService.HOST_URL + '/admin/SaveResultDetails';
  public static updateResultDetailsURL: string = ApiService.HOST_URL + '/admin/UpdateResultDetails';
  public static removeResultDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveResultDetailsById/';
  public static getResultDetailsByIdURL: string = ApiService.HOST_URL + '/admin/GetResultDetailsById/';
  public static uploadPDFURL: string = ApiService.HOST_URL + '/admin/UploadPDF';
  public static saveNewsDataListURL: string = ApiService.HOST_URL + '/admin/SaveNewsDataList';
  public static getNewsByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetNewsByIdDetails/';
  public static removeNewsByIdDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveNewsByIdDetails/';
  public static saveOthersDataListURL: string = ApiService.HOST_URL + '/admin/SaveOthersDataList';
  public static removeOtherDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveOtherDetailsById/'
  public static getOthersByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetOthersByIdDetails/';

  public static saveStudentListDataURL: string = ApiService.HOST_URL + '/admin/SaveStudentListData';
  public static updateStudentListDataURL: string = ApiService.HOST_URL + '/admin/UpdateStudentListData';
  public static removeStudentListDataURL: string = ApiService.HOST_URL + '/admin/RemoveStudentListData/';
  public static getStudentListDataURL: string = ApiService.HOST_URL + '/admin/GetStudentListData/';

  public static saveMagazineListURL: string = ApiService.HOST_URL + '/admin/SaveMagazineList';
  public static removeMagazineListURL: string = ApiService.HOST_URL + '/admin/RemoveMagazineList/';
  public static getMagazineListURL: string = ApiService.HOST_URL + '/admin/GetMagazineList';
  public static getCounselingDataURL: string = ApiService.HOST_URL + '/admin/GetCounselingData';
  public static getRahatokarshDonationListURL: string = ApiService.HOST_URL + '/admin/GetRahatokarshDonationList';
  public static generateRahatokarshCertficateURL: string = ApiService.HOST_URL + '/admin/GenerateRahatokarshCertficate';
  public static uploadMoreImageURL: string = ApiService.HOST_URL + '/admin/UploadMoreImage';
  public static saveScholarshipDetailsURL: string = ApiService.HOST_URL + '/admin/SaveScholarshipDetails';
  public static getScholarshipDetailsURL: string = ApiService.HOST_URL + '/admin/GetScholarshipDetails/';
  public static removeScholarshipDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveScholarshipDetails/';

  public static saveQuestionPapersDetailsURL: string = ApiService.HOST_URL + '/admin/SaveQuestionPapersDetails';
  public static getQuestionPapersDetailsURL: string = ApiService.HOST_URL + '/admin/GetQuestionPapersDetails/';
  public static removeQuestionPapersDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveQuestionPapersDetails/';

  public static saveGatePassUserListURL: string = ApiService.HOST_URL + '/admin/SaveGatePassUserList';
  public static getGatePassUserListURL: string = ApiService.HOST_URL + '/admin/GetGatePassUserList';

  public static updateActiveDeactiveAnswerkeyURL: string = ApiService.HOST_URL + '/admin/UpdateActiveDeactiveAnswerkey';
  public static saveAnswerkeyDataListURL: string = ApiService.HOST_URL + '/admin/SaveAnswerkeyDataList';
  public static getAnswerkeyByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetAllAnswerkey';
  public static removeAnswerkeyByIdDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveAnswerkeyByIdDetails/';






  //Cashfree APIS
  public static createCashfreeOrderURL: string = ApiService.HOST_URL + '/cashfree/createCashfreeOrder';





}
