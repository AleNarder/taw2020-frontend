import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/http/auth.service'

/**
 * Modal utilizzato per il recupero password
 */
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  waiting = false
  email = new FormControl('', [Validators.required, Validators.email])

  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private auth: AuthService) { }

  ngOnInit(): void {
  }

  close (): void {
    if (!this.email.hasError('required') && !this.email.hasError('email')) {
      this.waiting = true
      this.auth.reset(this.email.value).subscribe(() => {
        this.waiting = false
        this.dialogRef.close(this.email.value)
      }, (error) => {
        this.dialogRef.close(this.email.value)
      })
    }
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
