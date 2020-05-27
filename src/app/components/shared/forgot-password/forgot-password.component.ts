import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email])

  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>) { }

  ngOnInit(): void {
  }

  close (): void {
    this.dialogRef.close(this.email.value)
  }

  getMailErrorMessage () {
    if (this.email.hasError('required')) {
      return 'Il campo email non può essere vuoto';
    }
    else if (this.email.hasError('email')) {
      return 'Mail non valida'
    }
  }

}
