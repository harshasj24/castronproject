import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hemoglobin',
  templateUrl: './hemoglobin.component.html',
  styleUrls: ['./hemoglobin.component.css'],
})
export class HemoglobinComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  dta: any;

  hemo() {
    let { glucometry, thyroid } = this.dta;
    if (glucometry) {
      this.router.navigate(['./entersamples/glucometry'], {
        queryParams: { data: JSON.stringify(this.dta) },
      });
    }
    if (thyroid) {
      if (glucometry) {
        this.router.navigate(['./entersamples/glucometry'], {
          queryParams: { data: JSON.stringify(this.dta) },
        });
      } else {
        this.router.navigate(['./entersamples/thyroid'], {
          queryParams: { data: JSON.stringify(this.dta) },
        });
      }
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.dta = JSON.parse(params.data);
      console.log(this.dta);
    });
    // if (this.dta.glucometry) {
    //   this.router.navigate(['./entersamples/glucometry']);
    // } else if (this.dta.thyroid) {
    //   this.router.navigate(['./entersamples/thyroid']);
    // }
  }
}
