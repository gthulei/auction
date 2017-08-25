import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public formModel : FormGroup;

  public goodsType: string[];
  // 构造参数默认为private,外部无法访问
  constructor(public apiService: ApiService) {

   this.goodsType = apiService.getGoodsType();
    // 模型驱动响应式
    let fb = new FormBuilder();
    //自定义验证,页面formControlName绑定
    this.formModel = fb.group({
      "title":["",Validators.minLength(3)],
      "price":[null,this.isNumber],
      "type":[null]
    })
  }

  // 自定义验证
  isNumber(v:FormGroup) :any {
    if(!v.value){
      return false
    }
    if(/^\d+\.?(\d{1,2})?$/.test(v.value)){
      return false;
    }
    return {isNumberPrice:true};
  }

  ngOnInit() {
  }

  onSearch() :void {
    if(this.formModel.valid){
      // 发射参数
      this.apiService.searchEvent.emit(this.formModel.value);
    }
  }

}
