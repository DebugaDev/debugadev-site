import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriandoLogEmaaplicacoesSpringBootComponent } from './criando-log-em-aplicacoes-spring-boot.component';

describe('CriandoLogEmaaplicacoesSpringBootComponent', () => {
  let component: CriandoLogEmaaplicacoesSpringBootComponent;
  let fixture: ComponentFixture<CriandoLogEmaaplicacoesSpringBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriandoLogEmaaplicacoesSpringBootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriandoLogEmaaplicacoesSpringBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
