import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISpaceXDetails, IParamsTypes } from './spacex.types';

@Injectable({
  providedIn: 'root'
})
export class MissionDetailsService {

  constructor(private httpClient: HttpClient) { }

  getSpaceXDetails(args: IParamsTypes): Observable<ISpaceXDetails> {
    let params;
    if (args) {
      const { launch_success, land_success, launch_year } = args;
      if (launch_success) {
        params = { launch_success };
      }
      if (land_success) {
        params = { land_success };
      }
      if (launch_year) {
        params = { launch_year };
      }
    }
    return this.httpClient.get<ISpaceXDetails>('https://api.spacexdata.com/v3/launches?limit=100', {
      params
    }
    );
  }
}
