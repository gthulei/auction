import { Component, OnInit } from '@angular/core';
import {ApiService, Produce} from "../service/api.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
@Component({
  selector: 'app-produce',
  templateUrl: './produce.component.html',
  styleUrls: ['./produce.component.scss']
})
export class ProduceComponent implements OnInit {

  public produces: Produce[];

  public filterField: string;

  // 通过管道搜索商品
  public search: FormControl = new FormControl();

  //构造注册ApiService
  constructor(public produce: ApiService) {
    //在使用dubounceTime的时候需要引入 rxjs/Rx 这里的意思是订阅页面上的titleFilter变化的流,延迟500毫秒响应搜索,页面上需要属性绑定
    //在使用响应式的表单的时候需要在app.module中引入ReactiveFormsModule
    this.search.valueChanges.debounceTime(500)
      .subscribe(v => this.filterField=v);
  }

  ngOnInit() {
    this.produces = this.produce.getProduces();
  }

}
