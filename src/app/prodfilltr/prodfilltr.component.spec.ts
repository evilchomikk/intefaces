import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdfilltrComponent } from './prodfilltr.component';

describe('ProdfilltrComponent', () => {
  let component: ProdfilltrComponent;
  let fixture: ComponentFixture<ProdfilltrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdfilltrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdfilltrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
