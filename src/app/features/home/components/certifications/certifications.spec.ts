import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { Certifications } from './certifications';

describe('Certifications', () => {
  let component: Certifications;
  let fixture: ComponentFixture<Certifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certifications],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Certifications);
    component = fixture.componentInstance;
    TestBed.inject(HttpTestingController).expectOne('http://localhost:3000/certifications').flush([]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
