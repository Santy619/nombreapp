import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BandejaChatPage } from './bandeja-chat.page';

describe('BandejaChatPage', () => {
  let component: BandejaChatPage;
  let fixture: ComponentFixture<BandejaChatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BandejaChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
