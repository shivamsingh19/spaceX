import { Component, OnInit } from '@angular/core';
import { MissionDetailsService } from '../shared/mission-details.service';
import { ISpaceXDetails, IParamsTypes } from '../shared/spacex.types';
import { SharedService } from '../shared/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {
  spaceXDetails: ISpaceXDetails;
  missionDetailsService$: Observable<any>;
  constructor(private missionDetailsService: MissionDetailsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.missionDetailsService$ = this.missionDetailsService.getSpaceXDetails(params);
    });
  }

}
