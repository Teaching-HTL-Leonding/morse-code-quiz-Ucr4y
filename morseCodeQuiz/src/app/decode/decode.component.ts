import { Component, OnInit } from '@angular/core';
import { DecodeService } from './decode.service';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css'],
})
export class DecodeComponent {
  public inputMorseCode!: string;
  public validInput: boolean = true;
  constructor(public decodeService: DecodeService) {}
  public checkValidInput(): void {}
}
