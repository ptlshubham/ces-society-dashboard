import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../core/services/authfake.service';
import { environment } from '../../../environments/environment';
import { LAYOUT_MODE } from '../../layouts/layouts.model';
import { HomeService } from 'src/app/core/services/home.services';
import { ApiService } from 'src/app/core/services/api.service';
import { UserProfileService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login Component
 */
export class LoginComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();
  // Carousel navigation arrow show
  showNavigationArrows: any;
  loginForm!: UntypedFormGroup;
  submitted = false;
  error = '';
  returnUrl!: string;
  layout_mode!: string;
  fieldTextType!: boolean;
  institute: any;
  collegeList: any = [];

  constructor(private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService,
    private apiService: ApiService,
    private userService: UserProfileService,
    private homeService: HomeService
  ) {
    this.getAllInstituteDetails();
    // redirect to home if already logged in
    localStorage.clear();
    if (
      this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.layout_mode = LAYOUT_MODE
    if (this.layout_mode === 'dark') {
      document.body.setAttribute("data-layout-mode", "dark");
    }
    //Validation Set
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    document.body.setAttribute('data-layout', 'vertical');
  }
  getAllInstituteDetails() {
    this.homeService.getAllInstituteData().subscribe((res: any) => {
      this.collegeList = res;
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      // if (environment.defaultauth === 'firebase') {
      //   this.authenticationService.login(this.f.email.value, this.f.password.value).then((res: any) => {
      //     this.router.navigate(['/']);
      //   })
      //     .catch(error => {
      //       this.error = error ? error : '';
      //     });
      // } else {
      //   this.authFackservice.login(this.f.email.value, this.f.password.value)
      //     .pipe(first())
      //     .subscribe(
      //       data => {
      //         this.router.navigate(['/']);
      //       },
      //       error => {
      //         this.error = error ? error : '';
      //       });
      // }
      this.userService.userLogin(this.f.email.value, this.f.password.value, this.institute).subscribe((res: any) => {

        if (res.length > 0) {
          localStorage.setItem('InstituteId', res[0].id);
          localStorage.setItem('InstituteName', res[0].name);
          localStorage.setItem('token', res[0].token);
          this.apiService.show('Login Successfully', { classname: 'bg-success text-center text-white', delay: 10000 });
          this.router.navigate(['/']);
        } else if (res == 1) {
          this.apiService.show('Incorrect Email !....please check your Email', { classname: 'bg-danger text-center text-white', delay: 10000 });
        } else {
          this.apiService.show('Incorrect Password !....please check your Password', { classname: 'bg-danger text-center text-white', delay: 10000 });
        }
      })
    }
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
