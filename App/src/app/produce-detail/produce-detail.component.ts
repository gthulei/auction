import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService, Produce} from "../service/api.service";

@Component({
  selector: 'app-produce-detail',
  templateUrl: './produce-detail.component.html',
  styleUrls: ['./produce-detail.component.scss']
})
export class ProduceDetailComponent implements OnInit {

  public prodId: number;

  public result: Produce;

  public flag: boolean;


  // 注入路由
  constructor(
    public route: ActivatedRoute,
    public produce: ApiService
  ) {
  }

  ngOnInit() {
    // 取路由参数
    this.prodId =this.route.snapshot.params["id"];

    this.result = this.produce.getProducesById(this.prodId);

  }

}
