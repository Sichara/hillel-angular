import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'transform'
})

export class TransformPipe implements PipeTransform {
    transform<T, K>(value: T, cb: (value: T, ...args: any[]) => K, ...args: any[]): K {
         return cb(value, ...args);
    }
    // transform(value, cb, ...args) {
    //      return cb(value, ...args);
    // }
}
