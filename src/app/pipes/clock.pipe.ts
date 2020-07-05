import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clock'
})
export class ClockPipe implements PipeTransform {

  transform(value: number): string {
    let t = ''
    if (value) {
      let s = value % 60
      let m = Math.floor(value / 60 % 60)
      let h = Math.floor(value / 60 / 60 % 24)
      let d = Math.floor(value / 60 / 60 / 24)
      t = [d + 'd', h + 'h', m + 'm', s + 's'].join(' : ')
    }
    return t
  }

}
