import { AfterViewInit, Component, OnInit } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements AfterViewInit {
  private map: L.Map | undefined;



  ngAfterViewInit(): void {
    this.initMap();
  }

  private async initMap(): Promise<void> {
    if (typeof window !== 'undefined') {
      const coordinates: L.LatLngTuple = [46.98480482747811, 6.90948140674719];
      const L = await import('leaflet');

      this.map = L.map('map').setView(coordinates, 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      L.marker(coordinates)
        .addTo(this.map)
        .bindPopup("<b>Rue de Port-Roulant 34</b><br>2000 Neuchâtel, Switzerland")
        .openPopup();
    }}
}
