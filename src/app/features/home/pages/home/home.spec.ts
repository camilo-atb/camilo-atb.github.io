import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    const httpMock = TestBed.inject(HttpTestingController);
    httpMock.expectOne('http://localhost:3000/technologies').flush([]);
    httpMock.expectOne('http://localhost:3000/projects').flush([]);
    httpMock.expectOne('http://localhost:3000/experience').flush([]);
    httpMock.expectOne('http://localhost:3000/blogPosts').flush([]);
    httpMock.expectOne('http://localhost:3000/certifications').flush([]);
    httpMock.expectOne('http://localhost:3000/milestones').flush([]);
    httpMock.expectOne('http://localhost:3000/contactInfo').flush([]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
