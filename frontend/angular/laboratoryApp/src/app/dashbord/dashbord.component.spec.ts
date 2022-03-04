import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { delay } from 'rxjs';
import * as Rx from 'rxjs';
import { ApiService } from '../services/api.service';
import { response } from '../services/response';
import { DashbordComponent } from './dashbord.component';

describe('DashbordComponent', () => {
  let component: DashbordComponent;
  let fixture: ComponentFixture<DashbordComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      providers: [],
      declarations: [DashbordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should get all reports', fakeAsync(() => {
    spyOn(apiService, 'allreports').and.callFake(() => {
      return Rx.of(response).pipe(delay(200));
    });
    component.getAllReports();
    tick(200);
    expect(component.arr).toEqual(response);
  }));

  it('it should get all user reports', fakeAsync(() => {
    spyOn(apiService, 'usersReport').and.callFake(() => {
      return Rx.of({ data: response }).pipe(delay(1000));
    });
    component.getAllUserResports();
    tick(1000);
    expect(component.reportsData).toEqual(response);
  }));

  it('it should select object by id', () => {
    component.arr = [];
    component.arr.data = response;
    let _id = '621cba7776c5fefc89d9ddb1';
    let selectUser = {
      t3Total: '64',
      thyroxine: '28',
      tsh: '2528',
      _id: '621cba7776c5fefc89d9ddb1',
    };

    component.viewReport(_id);
    expect(component.heomoglobinReport).toEqual(selectUser);
  });
});
