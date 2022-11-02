import { Component, OnInit } from '@angular/core';
import { EncodeService } from './encode.service';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css'],
})
export class EncodeComponent {
  public inputPlainText: string = '';
  public validInput: boolean = true;

  constructor(public encodeService: EncodeService) {}
  public checkValidInput(): boolean {
    if (this.inputPlainText.trim() === '') {
      return false;
    }
    if (this.inputPlainText.trim().length > 0) {
      for (let i = 0; i < this.inputPlainText.length; i++) {
        if (
          !(
            (this.inputPlainText[i] >= 'A' && this.inputPlainText[i] <= 'Z') ||
            this.inputPlainText[i] === ' '
          )
        ) {
          return false;
        }
      }
    }
    return true;
  }
}
