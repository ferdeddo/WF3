import { Pipe, PipeTransform } from '@angular/core';
import moment from "moment";
import "moment/locale/fr";

@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {

  transform(date: string) {
    return moment(date, "YYYY-MM-DD").fromNow();
  }
}
