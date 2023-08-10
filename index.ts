import { delay, map } from 'rxjs/operators';
import { of, race } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/combination/race

//Throws an error and ignores the other observables.
const first = of('first').pipe(delay(1000));
const second = of('second').pipe(delay(200));
const third = of('third').pipe(delay(300));
const error = of('error-stop here(where) is the smallest delay').pipe(
  delay(100)
  map(_ => {
    throw 'error';
  })
);
const fourth = of('third').pipe(delay(50));

//  if observables have is the smallest delay 
//  this block of code stops
// map(_ => {
//   throw 'error';
// })


// nothing logged
race(first, second, third, error, fourth).subscribe((val) => console.log(val));
