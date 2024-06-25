import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobGroupComponent } from './blob-group.component';

describe('BlobGroupComponent', () => {
  let component: BlobGroupComponent;
  let fixture: ComponentFixture<BlobGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlobGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlobGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
