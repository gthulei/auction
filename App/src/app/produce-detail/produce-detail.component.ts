import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService, Commentaries, Produce} from "../service/api.service";

@Component({
  selector: 'app-produce-detail',
  templateUrl: './produce-detail.component.html',
  styleUrls: ['./produce-detail.component.scss']
})
export class ProduceDetailComponent implements OnInit {

  public prodId: number;

  public result: Produce;

  public flag: boolean;

  public commentaries: Commentaries[];

  public starsDefault: number = 0;

  newComment: string='';


  // 注入路由 ApiService
  constructor(
    public route: ActivatedRoute,
    public produce: ApiService
  ) {
  }

  ngOnInit() {
    // 取路由参数
    this.prodId =this.route.snapshot.params["id"];

    // 详情页
    this.result = this.produce.getProducesById(this.prodId);

    // 取评论信息
    this.commentaries =this.produce.addProduce(this.prodId);

  }

  // 评论
  addSubmit() :void {
    let comment = new Commentaries(this.prodId,"hulei",this.starsDefault,this.newComment,new Date);
    // 数组追加
    this.commentaries.unshift(comment);
    this.flag = false;
  }

}
