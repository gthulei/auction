import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  // 要过滤数据,输入的参数,过滤条件
  transform(list:any[], filterField: string, keyword:string): any {
    // 为输入直接全部返回
    if(!keyword){
      return list
    }
    return list.filter( item => {
      let v = item[filterField];
      return v.indexOf(keyword) >= 0;
    })
  }

}
