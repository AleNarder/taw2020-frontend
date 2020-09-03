import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/http/auth.service'
import { appStateService } from 'src/app/services/state/appState.service';

/**
 * Modal utilizzato per invitare un nuovo moderatore
 */
@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email])
  moderatorForm = new FormGroup({email: this.email})

  constructor(
    public dialogRef: MatDialogRef<ModeratorComponent>,
    private auth: AuthService,
    private appState: appStateService
    ) { }

  ngOnInit(): void {
  }

  close (): void {
    this.auth.moderator(this.appState.state.token, this.email.value).subscribe(() => {
      this.dialogRef.close()
    }, (errorMessage) => {})
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



