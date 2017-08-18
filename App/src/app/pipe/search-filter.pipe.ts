import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  // 要过滤数据,输入的参数,过滤条件
  transform(list:any[], filterField: string, keyword:string): any {
    // 为输入直接全部返回
    if(!filterField){
      return list
    }
  }

}
