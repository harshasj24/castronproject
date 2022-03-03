import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

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

    req.flush(response);
  })

  it("it should get all reports",()=>{
    let response = [
      {
        date: '112-50-50',
        email: 'savanth@gmail.com',
        fName: 'savanth',
        glucometry: [
          {
            calcium: '120',
            fastingbloodsugar: '123',
            hba1c: '1230',
            postprandilabloodsugar: '125',
            _id: '621c51f778b12832de0abaef',
          },
        ],
        haematology: [],
        sampleId: 8,
        thyroid: [
          {
            t3Total: '64',
            thyroxine: '28',
            tsh: '2528',
            _id: '621cba7776c5fefc89d9ddb1',
          },
        ],
      },
      {
        date: '1 1,2022, 19:44:36',
        email: 'Naveen@gmail.com',
        fName: 'Naveen',
        glucometry: [
          {
            calcium: '120',
            fastingbloodsugar: '123',
            hba1c: '1230',
            postprandilabloodsugar: '125',
            _id: '621c51f778b12832de0abaef',
          },
        ],
        haematology: [],
        sampleId: 8,
        thyroid: [
          {
            t3Total: '64',
            thyroxine: '28',
            tsh: '2528',
            _id: '621cd8cd9ea54c01e6088295',
          },
        ],
      },
    ];
    
    service.allreports().subscribe((res)=>{
      expect(res).toEqual(response)
    })
    
    let req  = httpTestingController.expectOne({
      method: 'GET',
      url: `http://localhost:4300/reports/viewreports`,
    })
    req.flush(response)
  })

});
