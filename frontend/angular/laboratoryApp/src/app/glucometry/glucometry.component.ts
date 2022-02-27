import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-glucometry',
  templateUrl: './glucometry.component.html',
  styleUrls: ['./glucometry.component.css'],
})
export class GlucometryComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  samplesData: any;

  glucoSend() {
    let { thyroid } = this.samplesData;
    if (thyroid) {
      this.router.navigate(['./entersamples/thyroid'], {
        queryParams: { data: JSON.stringify(this.samplesData) },
      });
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.samplesData = JSON.parse(params.data);
      console.log(this.samplesData);
    });
  }
}
