import { TestBed } from '@angular/core/testing';

import { RomanizeService } from './romanize.service';

describe('RomanizeService', () => {

  let service: RomanizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(RomanizeService);
  });
});

describe('Base Cases romanize', () =>{
  let service: RomanizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(RomanizeService);
  });

  it('"I" should be 1', () => {
    expect(service.romanize(1)).toEqual('I');
  });

  it('"V" should be 5', () => {
    expect(service.romanize(5)).toEqual('V');
  });

  it('"X" should be 10', () => {
    expect(service.romanize(10)).toEqual('X');
  });

  it('"L" should be 50', () => {
    expect(service.romanize(50)).toEqual('L');
  });

  it('"C" should be 100', () => {
    expect(service.romanize(100)).toEqual('C');
  });

  it('"D" should be 500', () => {
    expect(service.romanize(500)).toEqual('D');
  });

  it('"M" should be 1000', () => {
    expect(service.romanize(1000)).toEqual('M');
  });
});

describe('Romanize common cases', () => {

  let service: RomanizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(RomanizeService);
  });

  it('"II" should be 2', () => {
    expect(service.romanize(2)).toEqual('II');
  });

  it('"III" should be 3', () => {
    expect(service.romanize(3)).toEqual('III');
  });

  it('"IV" should be 4', () => {
    expect(service.romanize(4)).toEqual('IV');
  });

  it('"VI" should be 6', () => {
    expect(service.romanize(6)).toEqual('VI');
  });

  it('"VIII" should be 8', () => {
    expect(service.romanize(8)).toEqual('VIII');
  });

  it('"IX" should be 9', () => {
    expect(service.romanize(9)).toEqual('IX');
  });

  it('"XIV" should be 14', () => {
    expect(service.romanize(14)).toEqual('XIV');
  });

  it('"XV" should be 15', () => {
    expect(service.romanize(15)).toEqual('XV');
  });

  it('"XX" should be 20', () => {
    expect(service.romanize(20)).toEqual('XX');
  });

  it('"LXX" should be 70', () => {
    expect(service.romanize(70)).toEqual('LXX');
  });

  it('"CL" should be 150', () => {
    expect(service.romanize(150)).toEqual('CL');
  });

  it('"CCC" should be 300', () => {
    expect(service.romanize(300)).toEqual('CCC');
  });

  it('"DCCC" should be 800', () => {
    expect(service.romanize(800)).toEqual('DCCC');
  });
});

describe('Special cases of romanization', () => {

  let service: RomanizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(RomanizeService);
  });

  it('"XLIV" should be 44', () => {
    expect(service.romanize(44)).toEqual('XLIV');
  });

  it('"XLIX" should be 49', () => {
    expect(service.romanize(49)).toEqual('XLIX');
  });

  it('"XCIX" should be 99', () => {
    expect(service.romanize(99)).toEqual('XCIX');
  });

  it('"CDXLIX" should be 449', () => {
    expect(service.romanize(449)).toEqual('CDXLIX');
  });

  it('"CMXCIX" should be 999', () => {
    expect(service.romanize(999)).toEqual('CMXCIX');
  });
});

describe('Random cases of romanization', () => {

  let service: RomanizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(RomanizeService);
  });

  it('"DCCCI" should be 801', () => {
    expect(service.romanize(801)).toEqual('DCCCI');
  });

  it('"CMLIX" should be 959', () => {
    expect(service.romanize(959)).toEqual('CMLIX');
  });

  it('"DXCIV" should be 594', () => {
    expect(service.romanize(594)).toEqual('DXCIV');
  });

  it('"LXI" should be 61', () => {
    expect(service.romanize(61)).toEqual('LXI');
  });

  it('"CCCLXXXVI" should be 386', () => {
    expect(service.romanize(386)).toEqual('CCCLXXXVI');
  });

  it('"XXXIX" should be 39', () => {
    expect(service.romanize(39)).toEqual('XXXIX');
  });

  it('"DCCIX" should be 709', () => {
    expect(service.romanize(709)).toEqual('DCCIX');
  });

  it('"CCLXXIX" should be 279', () => {
    expect(service.romanize(279)).toEqual('CCLXXIX');
  });
});
