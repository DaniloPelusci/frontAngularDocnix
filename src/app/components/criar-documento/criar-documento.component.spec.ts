import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDocumentoComponent } from './criar-documento.component';

describe('CriarDocumentoComponent', () => {
  let component: CriarDocumentoComponent;
  let fixture: ComponentFixture<CriarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarDocumentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
