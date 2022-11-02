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
export class EncodeService {
  morseCoded: string = '';
  constructor() {}
  encode(text: string): void {
    text = text.trim();
    for (let i = 0; i < text.length; i++) {
      if (text[i] >= 'A' && text[i] <= 'Z') {
        let index = text[i].charCodeAt(0) - 65;
        this.morseCoded += morseCode[index];
        this.morseCoded += ' ';
      } else if (text[i] === ' ') {
        this.morseCoded += ' / ';
      } else {
        this.morseCoded = 'Input is not between A and Z';
      }
    }
  }
}
