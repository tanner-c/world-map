import { Component, Input } from '@angular/core';
import { CountryData } from '../map-home/map-home';

@Component({
  selector: 'app-country-details',
  imports: [],
  templateUrl: './country-details.html',
  styleUrls: ['./country-details.css'],
})
export class CountryDetails {
  @Input() selectedCountry: CountryData | null = null;
  @Input() loading: boolean = false;
}
