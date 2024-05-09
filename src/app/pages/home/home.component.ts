import { Component } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';
import { BoredApiService } from 'src/app/services/bored-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  activity: Activity = {};

  constructor(
    private _boredApiService: BoredApiService
  ) {}

  public getActivity(): void {
    this._boredApiService.get().subscribe(
      data => {
        this.activity = data
        console.log(this.activity);
      }
    )
  }

}
