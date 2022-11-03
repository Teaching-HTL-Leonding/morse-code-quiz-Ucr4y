import { Injectable } from '@angular/core';
const morseCode = [
  /* A */ '.-',
  /* B */ '-...',
  /* C */ '-.-.',
  /* D */ '-..',
  /* E */ '.',
  /* F */ '..-.',
  /* G */ '--.',
  /* H */ '....',
  /* I */ '..',
  /* J */ '.---',
  /* K */ '-.-',
  /* L */ '.-..',
  /* M */ '--',
  /* N */ '-.',
  /* O */ '---',
  /* P */ '.--.',
  /* Q */ '--.-',
  /* R */ '.-.',
  /* S */ '...',
  /* T */ '-',
  /* U */ '..-',
  /* V */ '...-',
  /* W */ '.--',
  /* X */ '-..-',
  /* Y */ '-.--',
  /* Z */ '--..',
];
@Injectable({
  providedIn: 'root',
})
export class DecodeService {
  constructor() {}
  plainText: string = '';
  splittedText: string[] = [];
  decode(text: string): string {
    this.plainText = '';
    this.splittedText = text.split(' ');
    for (let i = 0; i < this.splittedText.length; i++) {
      if (this.splittedText[i] === '/') {
        this.plainText += ' ';
      } else
        for (let j = 0; j < morseCode.length; j++) {
          if (this.splittedText[i] === morseCode[j]) {
            this.plainText += String.fromCharCode(j + 65);
          }
        }
    }
    if (this.plainText === '') {
      this.plainText = 'Wrong Input!';
    }
    return this.plainText;
  }
}
