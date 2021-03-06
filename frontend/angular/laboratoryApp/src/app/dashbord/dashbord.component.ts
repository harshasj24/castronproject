import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent implements OnInit {
  date: any;
  constructor(private apiServices: ApiService) { }

  flag1: boolean = true
  isLoadders: boolean = true

  getAllReports() {
    this.apiServices.allreports().subscribe((val) => {
      console.log(val);
      this.arr = val;
    });
  }

  getAllUserResports() {
    this.apiServices.usersReport().subscribe((data: any) => {
      this.reportsData = data.data;
    });
  }

  sample = new FormGroup({
    patientName: new FormControl('', [Validators.required]),
    hemoglobin: new FormControl(''),
    glucometry: new FormControl(''),
    thyroid: new FormControl(''),
  });
  get patientName() {
    return this.sample.get('patientName');
  }

  get hemoglobin() {
    return this.sample.get('hemoglobin');
  }

  get glucometry() {
    return this.sample.get('glucometry');
  }

  get thyroid() {
    return this.sample.get('thyroid');
  }
  hemoForm = new FormGroup({
    hemoglobin: new FormControl('', Validators.required),
    neutrophils: new FormControl('', Validators.required),
    eosinophiles: new FormControl('', Validators.required),
    basophills: new FormControl('', Validators.required),
    pavkedCellVolume: new FormControl('', Validators.required),
    totalCount: new FormControl('', Validators.required),
    lymphocytes: new FormControl('', Validators.required),
    monocytes: new FormControl('', Validators.required),
    redBloodCells: new FormControl('', Validators.required),
    mvc: new FormControl('', Validators.required),
  });

  data: any;
  glucoForm = new FormGroup({
    fastingbloodsugar: new FormControl('', Validators.required),

    postprandilabloodsugar: new FormControl('', Validators.required),
    hba1c: new FormControl('', Validators.required),
    calcium: new FormControl('', Validators.required),
  });
  thyForm = new FormGroup({
    t3Total: new FormControl('', Validators.required),

    thyroxine: new FormControl('', Validators.required),
    tsh: new FormControl('', Validators.required),
  });

  newa: any;
  uId: any;

  glucoData() {
    this.apiServices
      .editReport({ _id: this.uId, glucometry: this.glucoForm.value })
      .subscribe((val) => { });
  }

  hemoData() {
    console.log(this.hemoForm.value);

    this.apiServices
      .editReport({ _id: this.uId, haematology: this.hemoForm.value })
      .subscribe((val) => {
        console.log(val);
      });
  }
  thyData() {
    this.apiServices
      .editReport({ _id: this.uId, thyroid: this.thyForm.value })
      .subscribe((val) => {
        console.log(val);
      });
  }
  sampleFormData() { }

  reportsData: any;

  allReports: any=[];
  allReportsCpy: any;
  names: any;
  flag: any = false;
  search() {
    console.log(this.names);

    if (this.names) {
      this.allReports = this.allReports.filter((val: any) => {
        return val.fName.toLowerCase().includes(this.names.toLowerCase()) || val.date.toLowerCase().includes(this.names.toLowerCase()) ;
      });
    } else {
      this.allReports = this.allReportsCpy;
    }
    if (this.allReports.length === 0) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  heomoglobinReport: any = [];
  glucometryReport: any = [];
  thyroidReport: any = [];

  hemo() { }

  userReport: any = '';

  viewReport(_id: any) {
    this.uId = _id;
    for (const i of this.arr.data) {
      if (_id === i._id) {
        this.heomoglobinReport = i.haematology[0];
      }
    }
  }
  arr: any;
  viewReportglu(_id: any) {

    console.log('thy', this.glucometry);

    for (const i of this.arr.data) {
      if (_id === i._id) {
        this.glucometryReport = i.glucometry[0];
      }
    }
  }
  viewReportthy(_id: any) {
    this.uId = _id;
    for (const i of this.arr.data) {
      if (_id === i._id) {
        console.log(i.thyroid[0]);

        this.thyroidReport = i.thyroid[0];
      }
    }
  }

  ngOnInit(): void {
    console.log('one', this.newa);
    this.getAllReports();

    window.addEventListener('beforeunload', function (e) {
      var confirmationMessage = 'o/';
      console.log('cond');
      e.returnValue = confirmationMessage;
      return confirmationMessage;

    });
    this.getAllUserResports();
    this.apiServices.usersReport().subscribe((rep: any) => {
      this.isLoadders = false
      // this.allReports = rep.data;
      console.log(rep.data.length);
      
      let conform=window.confirm("do need more data")
      if (rep.data.length>=5) {
        console.log("data");
       conform
      }
      if (conform) {
       this.allReports=rep.data  
      }else{
        for(let i=0; i<5; i++){
          this.allReports.push(rep.data[i])

        }
      
      }

    
      // this.allReports = this.allReports.data;
      this.allReportsCpy = [...this.allReports];
      // console.log(rep);
    });

    console.log('onlu once', this.sample.value);
    
    
    this.date=new Date()

  }


}
