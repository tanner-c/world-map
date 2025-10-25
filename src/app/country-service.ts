import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  constructor(private http: HttpClient) { }

  getCountryDetails(countryCode: string) {
    return this.http.get(`https://api.worldbank.org/v2/country/${countryCode}?format=json`);
  }
}
