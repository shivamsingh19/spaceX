import { Component, OnInit } from '@angular/core';
import { MissionDetailsService } from '../shared/mission-details.service';
import { ISpaceXDetails } from '../shared/spacex.types';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  spaceXDetails$: Observable<ISpaceXDetails>;

  constructor(private missionDetailsService: MissionDetailsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.spaceXDetails$ = this.missionDetailsService.getSpaceXDetails(params);
    });
  }

}
