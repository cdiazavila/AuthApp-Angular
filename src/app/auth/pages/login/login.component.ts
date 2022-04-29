import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['Test1@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })
  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService) { }



  login() {


    const { email, password } = this.miFormulario.value;
    this.authservice.login(email, password)
      .subscribe(ok => {
        if (ok === true) {

          this.router.navigateByUrl('/dashboard')
        } else {
          // mensaje de error
          Swal.fire('Error', ok, 'error')
        }
      })

  }




}
