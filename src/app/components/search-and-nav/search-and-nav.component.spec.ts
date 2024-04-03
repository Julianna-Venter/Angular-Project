import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndNavComponent } from './search-and-nav.component';

describe('SearchAndNavComponent', () => {
  let component: SearchAndNavComponent;
  let fixture: ComponentFixture<SearchAndNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAndNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchAndNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
