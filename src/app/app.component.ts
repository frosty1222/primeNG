import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryService } from './service/countryservice.service';
import { SelectItemGroup } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prime-evaluation';
  countries: any[] = [];

  items: any[] = [];

  groupedCities: SelectItemGroup[] = [];

  selectedCountryAdvanced: any[] = [];

  filteredCountries: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
      this.countryService.getCountries().then((countries:any) => {
          this.countries = countries;
      });

      this.groupedCities = [
          {
              label: 'Germany',
              value: 'de',
              items: [
                  { label: 'Berlin', value: 'Berlin' },
                  { label: 'Frankfurt', value: 'Frankfurt' },
                  { label: 'Hamburg', value: 'Hamburg' },
                  { label: 'Munich', value: 'Munich' }
              ]
          },
          {
              label: 'USA',
              value: 'us',
              items: [
                  { label: 'Chicago', value: 'Chicago' },
                  { label: 'Los Angeles', value: 'Los Angeles' },
                  { label: 'New York', value: 'New York' },
                  { label: 'San Francisco', value: 'San Francisco' }
              ]
          },
          {
              label: 'Japan',
              value: 'jp',
              items: [
                  { label: 'Kyoto', value: 'Kyoto' },
                  { label: 'Osaka', value: 'Osaka' },
                  { label: 'Tokyo', value: 'Tokyo' },
                  { label: 'Yokohama', value: 'Yokohama' }
              ]
          }
      ];

      this.items = [];
      for (let i = 0; i < 10000; i++) {
          this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
      }
  }

  filterCountry(event:any) {
      let filtered: any[] = [];
      let query = event.query;

      for (let i = 0; i < this.countries.length; i++) {
          let country = this.countries[i];
          if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(country);
          }
      }

      this.filteredCountries = filtered;
  }
}
