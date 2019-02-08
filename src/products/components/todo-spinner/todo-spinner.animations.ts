import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence
} from "@angular/animations";

export const todoSpinnerAnimations = {
  move: trigger('move', [
    state('in', style({transform: 'translateX(0)'})),
    state('out', style({transform: 'translateX(25%)'})),
    transition('in => out', animate('5s linear')),
    transition('out => in', animate('5s linear'))
  ]),
};


