import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dani-weather-ltd-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
