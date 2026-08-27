import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { ContactPreview } from './contact-preview';

describe('ContactPreview', () => {
  let component: ContactPreview;
  let fixture: ComponentFixture<ContactPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPreview],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPreview);
    component = fixture.componentInstance;
    TestBed.inject(HttpTestingController).expectOne('http://localhost:3000/contactInfo').flush([]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
