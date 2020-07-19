import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: number): string {
    const date = new Date(value)
    const today = new Date(Date.now())
    if (today.getDate() !== date.getDate()) {
      return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/')
    } else {
      if (today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear()) {
        return [date.getHours() + 1, date.getMinutes()].join(':')
      }
    }
  }
}
