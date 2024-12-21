import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgumasCoisasSobreJava1Component } from './algumas-coisas-sobre-java-1.component';

describe('AlgumasCoisasSobreJava1Component', () => {
  let component: AlgumasCoisasSobreJava1Component;
  let fixture: ComponentFixture<AlgumasCoisasSobreJava1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgumasCoisasSobreJava1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgumasCoisasSobreJava1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
