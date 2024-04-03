import { concat, of } from 'rxjs';

const one = of('a', 'b');

const two = of('x', 'y');

const res = concat(one, two);

res.subscribe(console.log);
