import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import {response} from './response'

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ApiService]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(()=>{
    httpTestingController.verify()
  })
  it('it should register user',()=>{
    let user = {
      error:false,
      message:"Data posted sucessfully",
      data:{
      email: "example@gmail.com",
      fName: "example",
      password: "password123",
      role: "user",
      _id:"621a6f58ae913d9af5017f09"
    }
  }
    service.signup(user).subscribe(res=>{
      expect(res).toEqual(user);
    })
       
    const req = httpTestingController.expectOne({
      method: 'POST',
      url: `http://localhost:4300/labs/signup`,
    });
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json')
    req.flush(user);
  })


  it("it should login user",()=>{
    let response  = {
      error: false,
      message: "login Sucessfull",
    data:{
      fName: "example",
      role: "Admin",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmTmFtZSI6InNoYWZpIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjQ2MzAxOTE0LCJleHAiOjE2NDYzMzA3MTR9.4cH4nDHq2fMHpFjElyr_f1UDVeK2TCAJtKHYr7V-vaU",
      _id: "62208305bdbe4d9119fb3d7d"
    } 
    }
    service.login(response).subscribe(res=>{
      expect(res).toEqual(response);
    })
       
    const req = httpTestingController.expectOne({
      method: 'POST',
      url: `http://localhost:4300/labs/login`,
    });
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json')
    req.flush(response);
  })

  it("it should get all reports",()=>{
   
    
    service.allreports().subscribe((res)=>{
      expect(res).toEqual(response)
    })
    
    let req  = httpTestingController.expectOne({
      method: 'GET',
      url: `http://localhost:4300/reports/viewreports`,
    })
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json')
    req.flush(response)
  })

});
