import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {
  @Output() countrySelected: EventEmitter<{ countryCode: string; name: string }> = new EventEmitter();

  ngOnInit() {
    const map = document.getElementById('map');

    map?.childNodes.forEach((node) => {
      const element = node as HTMLElement;

      element.addEventListener('click', () => {
        this.onCountryClick(element.id, element.getAttribute('name') || '');
      });

      element.addEventListener('mouseover', () => {
        element.style.fill = 'blue';
      });

      element.addEventListener('mouseleave', () => {
        element.style.fill = '';
      });

    });
  }

  onCountryClick(countryCode: string, name: string) {
    this.countrySelected.emit({ countryCode, name });
  }
}
