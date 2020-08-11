import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-infosnack',
  templateUrl: './infosnack.component.html',
  styleUrls: ['./infosnack.component.css']
})
export class InfosnackComponent {

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, className: string) {

    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: [className],
    });
  }

}
