import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string

  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>) { }

  ngOnInit(): void {
  }

  close (): void {
    this.dialogRef.close(this.email)
  }

}
