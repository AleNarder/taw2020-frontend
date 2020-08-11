import { Pipe, PipeTransform } from '@angular/core';
import { Auction } from '../services/models/Auction';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(auctions: Auction[], filter: any): Auction[] {
    return auctions
    .filter(auction => {
      if (filter.params.length > 0) {
        const values = filter.params.map(param => auction.book[0][param].toLowerCase())
        return values.find((value) => value.indexOf(filter.query.toLowerCase()) >= 0 )
      } return auction
    }).filter(auction => {
        return ((filter.min) ? (auction.currentPrice >= filter.min) : true) && ((filter.max) ? (auction.currentPrice <= filter.max) : true)
    }).filter(auction => {
      if (filter.status.length === 1) {
        return (filter.status[0] === 'attive') ? auction.isActive : !auction.isActive
      } return auction
    }).filter(auction => {
      const locationFilters = Object.keys(filter.location).filter(area => filter.location[area])
      if (locationFilters.length > 0) {
        return locationFilters.map(area => auction['location'][0][area] ===  filter.location[area]).reduce((acc, curr) => acc && curr)
      } return auction
    })
  }
}
