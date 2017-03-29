import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'filter'
})

@Injectable()

export class filterPipe {
  transform(data: Array<Object>, opts: Array<any>) {
    let args = (opts[0]) ? opts[0] : '';
    let props = opts[1];
    let filtered = [];

    data.map((item) => {
      for (var i = 0; i < props.length; i++) {
        if (item[props[i]].toLowerCase().search(args.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1').toLowerCase()) >= 0) {
          filtered.push(item);
          break;
        }
      }
    });

    return filtered;
  }
}
