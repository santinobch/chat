import {
  trigger,
  animate,
  transition,
  style,
  state
} from '@angular/animations';

export const slideInLeftAnimation =

  trigger('slideInLeftAnimation', [

    state('true', style({
      opacity: '1',
      transform: 'translateX(0)'
    })),
    state('false', style({
      transform: 'translateX(-50%)'
    })),
    transition('false => true', [
      animate('0.5s 0ms cubic-bezier(0.65, 0, 0.35, 1)')
    ]),
    transition('true => false', [
      animate('0.5s 0ms cubic-bezier(0.65, 0, 0.35, 1)')
    ])

  ]);
