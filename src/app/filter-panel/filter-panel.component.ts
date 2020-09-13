import { Component, OnInit } from '@angular/core';
import { IParamsTypes } from '../shared/spacex.types';
import { SharedService } from '../shared/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {
  launchYears: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  slectedLaunchYear(year: number): void {
    this.router.navigate(['launchDetails'],
      {
        queryParams: {
          launch_year: year
        },
        queryParamsHandling: 'merge',
      });
  }

  landing(value: boolean): void {
    this.router.navigate(['launchDetails'], {
      queryParams: {
        land_success: value
      },
      queryParamsHandling: 'merge',
    });
  }

  launch(value: boolean): void {
    this.router.navigate(['launchDetails'],
      {
        queryParams: {
          launch_success: value
        },
        queryParamsHandling: 'merge',
      });
  }

  clear(): void {
    this.router.navigate(['launchDetails']);
  }

}
