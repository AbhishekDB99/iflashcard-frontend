import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr',
})
export class UsdInrPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    const [price, cents] = args;
    return value * price + cents;
  }
}
