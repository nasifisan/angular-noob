import { Component } from '@angular/core';
import { concat, interval, map, merge, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-reactive-calendar',
  standalone: true,
  imports: [],
  templateUrl: './reactive-calendar.component.html',
  styleUrl: './reactive-calendar.component.scss',
})
export class ReactiveCalendarComponent {
  constructor() {
    // const one = of('a', 'b');
    // const two = of('x', 'y');
    // const one = interval(1000).pipe(map((val) => val * 11));
    // const two = interval(1000).pipe(map((val) => val * 13));
    // const res = merge(one, two);
    // res.subscribe(console.log);
  }

  ngOnInit() {
    const one = interval(1000).pipe(map((val) => val * 11));
    const two = of('a', 'b');

    const res = one.pipe(switchMap((val) => two));

    res.subscribe(console.log);
  }
}
