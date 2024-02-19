import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productListService',
  pure: true
})
export class ProductListService implements PipeTransform {
  Products: any;
  transform(value: any): any {

    if (!value) return null;

    return value.map((product: any) => product.name).join(', ');
  }
}
