import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  miFormulario : FormGroup=this.fb.group({
    name:['Test 3', Validators.required],
    email:['test3@gmail.com',[Validators.required,Validators.email]],
    password:['1234578',[Validators.required,Validators.minLength(6)]],
 })
  constructor(private fb:FormBuilder,private router:Router, private authService: AuthService) {}



   registro(){
     const {name,email,password}=this.miFormulario.value;
     this.authService.registro(name,email,password)
     .subscribe( ok =>{
      if (ok === true) {

        this.router.navigateByUrl('/dashboard')
      } else {
        // mensaje de error
        Swal.fire('Error', ok, 'error')
      }  
     
     })

   }
  ngOnInit(): void {
  }

}
