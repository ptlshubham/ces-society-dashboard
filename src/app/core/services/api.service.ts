import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TemplateRef } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static HOST_URL: string = "http://localhost:9000";
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

  // admin

  public static saveInsituteDetailsURL: string = ApiService.HOST_URL + '/admin/SaveInsituteDetails';
  public static getAllInstituteDetailsURL: string = ApiService.HOST_URL + '/admin/GetAllInstituteDetails';
  public static saveGalleryImagesURL: string = ApiService.HOST_URL + '/admin/SaveGalleryImages';
  public static uploadGalleryImagesURL: string = ApiService.HOST_URL + '/admin/UploadGalleryImages';
  public static getImagesByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetImagesByIdDetails';
  public static updateActiveDeactiveBannersURL: string = ApiService.HOST_URL + '/admin/UpdateActiveDeactiveBanners';
  public static removeImagesByIdDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveImagesByIdDetails';
  public static saveDepartmentListURL: string = ApiService.HOST_URL + '/admin/SaveDepartmentList';
  public static getDepartmentByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetDepartmentByIdDetails/';
  public static removeDepartmentByIdDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveDepartmentByIdDetails/';
  public static updateDepartmentListURL: string = ApiService.HOST_URL + '/admin/UpdateDepartmentList';
  public static saveStaffProfileImagesURL: string = ApiService.HOST_URL + '/admin/SaveStaffProfileImages';
  public static saveStaffDetailsListURL: string = ApiService.HOST_URL + '/admin/SaveStaffDetailsList';
  public static getAllStaffDetailsURL: string = ApiService.HOST_URL + '/admin/GetAllStaffDetails/';
  public static removeStaffDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveStaffDetailsById/';
  public static saveDonnerListDetailsURL: string = ApiService.HOST_URL + '/admin/SaveDonnerListDetails';
  public static getAllDonnerListURL: string = ApiService.HOST_URL + '/admin/GetAllDonnerList';
  public static removeDonnerDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveDonnerDetailsById/';
  public static getBeneficiaryYearURL: string = ApiService.HOST_URL + '/admin/GetBeneficiaryYear';
  public static saveBeneficiaryDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBeneficiaryDetails';
  public static getAllBeneficiaryListURL: string = ApiService.HOST_URL + '/admin/GetAllBeneficiaryList';
  public static removeBeneficiaryDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveBeneficiaryDetailsById/';
  public static saveBulkBeneficiaryDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBulkBeneficiaryDetails';
  public static saveBulkDonnersDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBulkDonnersDetails';
  public static saveBlogDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBlogDetails';
  public static getBlogsDetailsByIdURL: string = ApiService.HOST_URL + '/admin/GetBlogsDetailsById/'
  public static uploadBlogImagesURL: string = ApiService.HOST_URL + '/admin/uploadBlogImages';
  public static uploadInfraImageURL: string = ApiService.HOST_URL + '/admin/UploadInfraImage';
  public static saveInfrastructureDetailsURL: string = ApiService.HOST_URL + '/admin/SaveInfrastructureDetails';
  public static getInfraDetailsByIdURL: string = ApiService.HOST_URL + '/admin/GetInfraDetailsById/';
  public static SaveAlumniDetailsURL: string = ApiService.HOST_URL + '/admin/SaveAlumniDetails';
  public static GetAlumniDetailsURL: string = ApiService.HOST_URL + '/admin/GetAlumniDetails';
  public static getContactUsDetailsByIdURL: string = ApiService.HOST_URL + '/admin/GetContactUsDetailsById/';
  public static saveResultDetailsURL: string = ApiService.HOST_URL + '/admin/SaveResultDetails';
  public static getResultDetailsByIdURL: string = ApiService.HOST_URL + '/admin/GetResultDetailsById/';
  public static uploadPDFURL: string = ApiService.HOST_URL + '/admin/UploadPDF';

  public static saveNewsDataListURL: string = ApiService.HOST_URL + '/admin/SaveNewsDataList';
  public static getNewsByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetNewsByIdDetails/';
  public static removeNewsByIdDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveNewsByIdDetails/';






  public static adminLoginURL: string = ApiService.HOST_URL + '/authenticate/adminLogin';
  // public static getBuyerListURL: string = ApiService.HOST_URL + '/admin/getAllBuyer';
  // public static getAllUserListURL: string = ApiService.HOST_URL + '/admin/getAllUser';
  // public static getSellerListURL: string = ApiService.HOST_URL + '/admin/getAllSeller';
  // public static getKycPendingListURL: string = ApiService.HOST_URL + '/admin/getAllKYCPendingUser';
  // public static updateKYCURL: string = ApiService.HOST_URL + '/admin/updateKYCUser';
  // public static uploadMaterialImageURL: string = ApiService.HOST_URL + '/admin/UploadMaterialImage';
  // public static uploadMaterialMultiImageURL: string = ApiService.HOST_URL + '/admin/UploadMaterialMultiImage';
  // public static completeProfileURL: string = ApiService.HOST_URL + '/admin/completeProfile';
  // public static getUserDetailById: string = ApiService.HOST_URL + '/admin/getUserDetailById/'
  // public static uploadCancelCheckImageURL: string = ApiService.HOST_URL + '/admin/UploadCancelCheckImage';

  //trading






  // public static getAllTradingDatabyIdForSellerURL: string = ApiService.HOST_URL + '/trading/getAllTradingDatabyIdForSeller';
  // public static getAllTradingDatabyIdURL: string = ApiService.HOST_URL + '/trading/getAllTradingDatabyId';
  // public static getNewTradingReqForSellerURL: string = ApiService.HOST_URL + '/trading/getNewTradingReqForSeller';
  // public static saveSellerTradeRequestURL: string = ApiService.HOST_URL + '/trading/saveSellerTradeRequest';
  // public static newComissionPaymentForBuyerURL: string = ApiService.HOST_URL + '/trading/NewComissionPaymentForBuyer';
  // public static newComissionPaymentForSellerURL: string = ApiService.HOST_URL + '/trading/NewComissionPaymentForSeller';
  // public static uploadWeightSlipImageURL: string = ApiService.HOST_URL + '/trading/UploadWeightSlipImage';
  // public static uploadDeliveryRecieptImageURL: string = ApiService.HOST_URL + '/trading/UploadDeliveryRecieptImage';
  // public static saveTransporterDetailsURL: string = ApiService.HOST_URL + '/trading/SaveTransporterDetails';
  // public static getTransporterDetailsbyIdForSellerURL: string = ApiService.HOST_URL + '/trading/GetTransporterDetailsbyIdForSeller';
  // public static uploadPaymentSlipImageURL: string = ApiService.HOST_URL + '/trading/UploadPaymentSlipImage';
  // public static saveBuyerPaymentDetailsURL: string = ApiService.HOST_URL + '/trading/SaveBuyerPaymentDetails';
  // public static invoiceRecieptImageUploadURL: string = ApiService.HOST_URL + '/trading/InvoiceRecieptImageUpload';
  // public static saveDileveryRecieptDataURL: string = ApiService.HOST_URL + '/trading/SaveDeliveryRecieptData';






  //Cashfree APIS
  public static createCashfreeOrderURL: string = ApiService.HOST_URL + '/cashfree/createCashfreeOrder';




  showNotification(from: any, align: any, msg: any, color: any) {


    var color = color;

    $.notify({
      icon: "",
      message: msg
    }, {
      type: color,
      timer: 2000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="fa fa-times"></i></button> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    });
  }
}
