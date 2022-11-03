import { TestBed } from '@angular/core/testing';

import { DecodeService } from './decode.service';

describe('DecodeService', () => {
  let service: DecodeService;
  it('should decode a morse letter', () => {
    service = new DecodeService();
    expect(service.decode('...')).toBe('S');
  });
  it('should decode a morse word', () => {
    service = new DecodeService();
    expect(service.decode('.... . .-.. .-.. ---')).toBe('HELLO');
  });
  it('should decode a morse sentence', () => {
    service = new DecodeService();
    expect(
      service.decode(
        '.... . .-.. .-.. --- / -- -.-- / -. .- -- . / .. ... / .-. --- -... .. -.'
      )
    ).toBe('HELLO MY NAME IS ROBIN');
  });
  it('shows an Error message if input is wrong', () => {
    service = new DecodeService();
    expect(service.decode('jdl')).toBe('Wrong Input!');
  });
});
