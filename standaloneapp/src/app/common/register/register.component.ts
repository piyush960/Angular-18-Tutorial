import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { Role, user } from '../../model/loginModel';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatSelectModule, MatRadioModule, MatInputModule, MatCheckboxModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private builder: FormBuilder, private service: MasterService, private router: Router){

  }
  
  roles: Role[] = [
    {value: 'sde', viewValue: 'SDE'},
    {value: 'analyst', viewValue: 'Analyst'},
    {value: 'manager', viewValue: 'Manager'},
  ];
  
  // registerForm = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   name: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required])),
  //   email: new FormControl('', Validators.email),
  // })

  registerForm = this.builder.group({
      username: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required),
      name: this.builder.control('', Validators.compose([Validators.minLength(5), Validators.required])),
      email: this.builder.control('', Validators.email),
      role: this.builder.control('sde', Validators.required),
      gender: this.builder.control('m'),
      terms: this.builder.control(true)
  })

  proceedRegister(){
    if(this.registerForm.valid){
      if(this.registerForm.value.terms){
        const body: user = {
          id: this.registerForm.value.username as string,
          name: this.registerForm.value.name as string ,
          password: this.registerForm.value.password as string,
          email: this.registerForm.value.email as string,
          role: this.registerForm.value.role as string,
          gender: this.registerForm.value.gender as string
        }
        this.service.proceedRegister(body).subscribe(item => {
          alert('Registered Successfully!')
          this.router.navigateByUrl('/login')
        })
      }
      else alert('Accept Terms & Conditions to proceed.')
    }
  }

}
