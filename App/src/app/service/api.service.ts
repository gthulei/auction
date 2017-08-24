import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {

  public produces: Produce[] = [
    new Produce(1,"苹果4",3000,2,"苹果4/8.8折","http://placehold.it/320x150"),
    new Produce(2,"苹果5",4000,4,"苹果5/8.8折","http://placehold.it/320x150"),
    new Produce(3,"苹果6",5000,3,"苹果6/8.8折","http://placehold.it/320x150"),
    new Produce(4,"苹果7",6000,3,"苹果7/8.8折","http://placehold.it/320x150"),
    new Produce(5,"苹果8",7000,4,"苹果8/8.8折","http://placehold.it/320x150"),
    new Produce(6,"苹果8",8000,2,"苹果9/8.8折","http://placehold.it/320x150"),
  ];

  public commentaries: Commentaries[] = [
    new Commentaries(1,"hulei",5,"很好!",new Date),
    new Commentaries(1,"hulei",4,"很好!",new Date),
    new Commentaries(2,"hulei",5,"很好!!",new Date)
  ];

  constructor(private http: Http) {
  }

  //商品信息
  getProduces() :Observable <any> {
    return this.http.get('/api/produces.json').map(res => res.json());
  }

  //商品信息详细
  getProducesById(id: number) :Produce {
    // 查找数值,并返回一个实例
    return this.produces.find((produce) => produce.id == id);
  }

  //论评
  addProduce(id: number) :Commentaries[] {
    // 查找数值,返回一个数组
   return this.commentaries.filter((o) => o.id == id);
  }

  getGoodsType(): string[]{
    return ['JAVA','C++','JS'];
  }


}

export class Produce {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public imgUrl: string
) {}
}

export class Commentaries {

  constructor(
    public id: number,
    public username: string,
    public rating: number,
    public desc: string,
    public date: Date
  ) {}
}
