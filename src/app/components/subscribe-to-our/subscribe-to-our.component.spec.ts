import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeToOurComponent } from './subscribe-to-our.component';

describe('SubscribeToOurComponent', () => {
  let component: SubscribeToOurComponent;
  let fixture: ComponentFixture<SubscribeToOurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribeToOurComponent]
    });
    fixture = TestBed.createComponent(SubscribeToOurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
