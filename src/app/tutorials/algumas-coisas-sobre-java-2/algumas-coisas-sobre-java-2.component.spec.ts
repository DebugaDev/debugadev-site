import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgumasCoisasSobreJava2Component } from './algumas-coisas-sobre-java-2.component';

describe('AlgumasCoisasSobreJava2Component', () => {
  let component: AlgumasCoisasSobreJava2Component;
  let fixture: ComponentFixture<AlgumasCoisasSobreJava2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgumasCoisasSobreJava2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgumasCoisasSobreJava2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
