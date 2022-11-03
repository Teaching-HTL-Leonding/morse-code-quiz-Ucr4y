import { TestBed } from '@angular/core/testing';

import { EncodeService } from './encode.service';

describe('EncodeService', () => {
  let service: EncodeService;

  it('should encode a single letter', () => {
    service = new EncodeService();
    service.encode('S');
    expect(service.morseCoded).toBe('...');
  });
  it('should encode a word', () => {
    service = new EncodeService();
    service.encode('SOS');
    expect(service.morseCoded).toBe('... --- ...');
  });
  it('should encode a sentence', () => {
    service = new EncodeService();
    service.encode('GOOD MORNING HERR GALLNER');
    expect(service.morseCoded).toBe(
      '--. --- --- -.. / -- --- .-. -. .. -. --. / .... . .-. .-. / --. .- .-.. .-.. -. . .-.'
    );
  });
  it('should send an error message because of wrong input', () => {
    service = new EncodeService();
    service.encode('jdsf1');
    expect(service.morseCoded).toBe('Input is not between A and Z');
  });
});
