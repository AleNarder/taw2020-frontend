import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe che dato un timestamp in millisecondi ne
 * ritorna una rappresentazione più semplice in termini
 * di data e ora
 */
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
        return [date.getHours(), (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes() ].join(':')
      }
    }
  }
}
