import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { ScoreCardComponent } from './score-card.component';

fdescribe('ScoreCardComponent', () => {
  let component: ScoreCardComponent;
  let fixture: ComponentFixture<ScoreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreCardComponent],
      imports: [RouterModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('handleBoxClicked()', () => {
    it('should emit buttonClicked event', () => {
      // setup
      const eventEmitterSpy = spyOn(component.buttonClicked, 'emit');

      // execute
      component.handleBoxClicked();

      // test
      expect(eventEmitterSpy).toHaveBeenCalled();
      expect(eventEmitterSpy).toHaveBeenCalledTimes(1);
    });
  });
});
