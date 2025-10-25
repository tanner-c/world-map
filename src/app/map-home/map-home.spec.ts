import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHome } from './map-home';

describe('MapHome', () => {
  let component: MapHome;
  let fixture: ComponentFixture<MapHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
