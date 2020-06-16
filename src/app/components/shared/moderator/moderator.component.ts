import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/http/auth.service'
import { appStateService } from 'src/app/services/state/appState.service';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {

  waiting = false
  email = new FormControl('', [Validators.required, Validators.email])

  constructor(
    public dialogRef: MatDialogRef<ModeratorComponent>,
    private auth: AuthService,
    private appState: appStateService
    ) { }

  ngOnInit(): void {
  }

  close (): void {
    this.waiting = true
    this.auth.moderator(this.appState.state.token, this.email.value).subscribe(() => {
      this.waiting = false
      this.dialogRef.close(this.email.value)
    }, (error) => {
      this.dialogRef.close(this.email.value)
    })
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



