import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform<T>(value: T[], key: keyof T): T[] {
        return (value || []).sort((courseItem1: T, courseItem2: T) => {
            if (courseItem1[key] < courseItem2[key]) {
                return -1;
            }

            if (courseItem1[key] > courseItem2[key]) {
                return 1;
            }

            return 0;
        });
    }
}
