import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-naac-main',
  templateUrl: './naac-main.component.html',
  styleUrls: ['./naac-main.component.scss']
})
export class NaacMainComponent implements OnInit {
  public Editor = ClassicEditor;
  paginateData: any = [];

  validationForm!: FormGroup;
  criteria = [
    { name: 'Criteria 1' },
    { name: 'Criteria 2' },
    { name: 'Criteria 3' },
    { name: 'Criteria 4' },
    { name: 'Criteria 5' },
    { name: 'Criteria 6' },
    { name: 'Criteria 7' },
    { name: 'SSR' },
    { name: 'AQAR' }
  ];
  selectedCriteria: any;
  isOpen: boolean = false;
  isUpdate: boolean = false;
  NAACDetailsModel: any = {};

  constructor(
    private homeService: HomeService,
    public toastr: ToastrService,
    public formBuilder: UntypedFormBuilder,
  ) {
    this.criteria = [
      { name: 'Criteria 1' },
      { name: 'Criteria 2' },
      { name: 'Criteria 3' },
      { name: 'Criteria 4' },
      { name: 'Criteria 5' },
      { name: 'Criteria 6' },
      { name: 'Criteria 7' },
      { name: 'SSR' },
      { name: 'AQAR' }
    ]
    this.selectedCriteria = null;
  }
  get f() { return this.validationForm.controls; }
  ngOnInit(): void {
  }
  backToList() {
    this.isOpen = false;
    this.isUpdate = false;
    this.selectedCriteria = {};
    this.validationForm.markAsUntouched();
  }
  openAddNAACDetails() {
    this.isOpen = true;
    this.isUpdate = false;
    this.selectedCriteria = {};
    this.validationForm.markAsUntouched();

  }
  saveNAACDetails(){

  }
  updateNaacDetails(){

  }
  onCriteriaChange(event: any) {
    this.selectedCriteria = event.name;
  }
  getPlacementDataById() {
    // this.homeService.getPlacementDetails(localStorage.getItem('InstituteId')).subscribe((res: any) => {
    //   this.placementData = res;
    //   debugger
    //   for (let i = 0; i < this.placementData.length; i++) {
    //     this.placementData[i].index = i + 1;
    //   }
    //   this.collectionSize = this.placementData.length;
    //   this.getPagintaion();
    // })
  }
  getPagintaion() {
    // this.paginateData = this.placementData
    //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
