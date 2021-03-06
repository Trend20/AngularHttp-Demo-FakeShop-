import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { faLocationDot, faPhone, faPaperPlane, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageFormGroup!: FormGroup;
  submitted = false;
  success = false;
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faPaperPlane = faPaperPlane;
  faEarthAmericas = faEarthAmericas;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageFormGroup = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  validateForm(){
    if(this.messageFormGroup.valid){
      Swal.fire(
        'Hey, thank you for reaching out to us!',
        'We will get back to you shortly!!!',
        'success'
      )
    }
  }
}
