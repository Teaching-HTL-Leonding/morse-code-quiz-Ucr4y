import { Component, OnInit } from '@angular/core';
import { DecodeService } from './decode.service';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css'],
})
export class DecodeComponent {
  public inputMorseCode: string = '';
  public validInput: boolean = true;
  constructor(public decodeService: DecodeService) {}
  public checkValidInput(): boolean {
    if (this.inputMorseCode.trim() === '') {
      return false;
    }
    if (this.inputMorseCode.trim().length > 0) {
      for (let i = 0; i < this.inputMorseCode.length; i++) {
        if (
          !(
            this.inputMorseCode[i] === '-' ||
            this.inputMorseCode[i] === '.' ||
            this.inputMorseCode[i] === '/' ||
            this.inputMorseCode[i] === ' '
          )
        ) {
          return false;
        }
      }
    }
    return true;
  }
}
