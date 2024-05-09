import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoredApiService {
  private API = '/activity'

  constructor(private _httpClient: HttpClient) { }

  public get(): Observable<Activity> {
    return this._httpClient.get<Activity>(`${environment.boredApi + this.API}`)
  }
}
