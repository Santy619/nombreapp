import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatIndividualPage } from './chat-individual.page';

describe('ChatIndividualPage', () => {
  let component: ChatIndividualPage;
  let fixture: ComponentFixture<ChatIndividualPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatIndividualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
