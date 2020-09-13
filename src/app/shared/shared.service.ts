import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IParamsTypes } from './spacex.types';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private message = new BehaviorSubject<IParamsTypes>(null);
  sharedMessage = this.message.asObservable();

  constructor() { }

  nextMessage(param: IParamsTypes): void {
    this.message.next(param);
  }
}
