import { Component, OnInit } from '@angular/core';
import {ApiService, Produce} from "../service/api.service";

@Component({
  selector: 'app-produce',
  templateUrl: './produce.component.html',
  styleUrls: ['./produce.component.scss']
})
export class ProduceComponent implements OnInit {

  public produces: Produce[];

  public search: string = '';

  //构造注册ApiService
  constructor(public produce: ApiService) { }

  ngOnInit() {
    this.produces = this.produce.getProduces();
  }

}
