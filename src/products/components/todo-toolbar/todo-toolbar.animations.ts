import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

export const todoToolbarAnimations = {
  fadeInOut: trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ]),
};


