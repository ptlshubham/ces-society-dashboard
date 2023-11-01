import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-naac-main',
  templateUrl: './naac-main.component.html',
  styleUrls: ['./naac-main.component.scss']
})
export class NaacMainComponent implements OnInit {
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
}
