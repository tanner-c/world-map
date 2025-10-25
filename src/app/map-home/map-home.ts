import { Component } from '@angular/core';
import { Map } from "../map/map";
import { CountryDetails } from "../country-details/country-details";
import { CountryService } from '../country-service';


@Component({
  selector: 'app-map-home',
  imports: [Map, CountryDetails],
  templateUrl: './map-home.html',
  styleUrls: ['./map-home.css'],
})
export class MapHome {
  selectedCountry: CountryData | null = null;
  loading: boolean = false;

  constructor(private countryService: CountryService) {}

  onCountrySelected(event: { countryCode: string; name: string }) {
    this.loading = true;
    this.countryService.getCountryDetails(event.countryCode).subscribe({
      next: (data: any) => {
        const countryInfo = data[1][0];

        this.selectedCountry = {
          countryCode: event.countryCode,
          name: event.name,
          capital: countryInfo.capitalCity,
          region: countryInfo.region.value,
          incomeLevel: countryInfo.incomeLevel.value,
          latitude: countryInfo.latitude,
          longitude: countryInfo.longitude,
        };

        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching country details:', error);
        this.loading = false;
      }
    });
  }
}
export interface CountryData {
  countryCode: string;
  name: string;
  capital: string;
  region: string;
  incomeLevel: string;
  latitude: string;
  longitude: string;
}
