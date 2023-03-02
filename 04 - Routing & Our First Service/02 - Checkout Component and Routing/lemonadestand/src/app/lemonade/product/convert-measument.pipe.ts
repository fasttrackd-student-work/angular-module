import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertMeasument'
})

export class ConvertMeasurementPipe implements PipeTransform {
  transform(value: number, unit: string) {
    switch (unit) {
      case 'oz':
        return value + ' oz'
      case 'tsp':
        if (value === 3 || value === 6) {
          return value / 3 + ' tbsp'
        }
        return value + ' tsp'
      case 'cubes':
        return value + ' cubes'
      default:
        return value + ' ' + unit
    }

  }
}
