import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  public produces: Produce[] = [
    new Produce(1,"苹果4",3000,1.5,"苹果4/8.8折","http://placehold.it/320x150"),
    new Produce(2,"苹果5",4000,4.5,"苹果5/8.8折","http://placehold.it/320x150"),
    new Produce(3,"苹果6",5000,2.5,"苹果6/8.8折","http://placehold.it/320x150"),
    new Produce(4,"苹果7",6000,3.5,"苹果7/8.8折","http://placehold.it/320x150"),
    new Produce(5,"苹果8",7000,4.5,"苹果8/8.8折","http://placehold.it/320x150"),
    new Produce(6,"苹果8",8000,2.5,"苹果9/8.8折","http://placehold.it/320x150"),
  ];

  constructor() { }

  //商品信息
  getProduces() :Produce[] {
    return this.produces;
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
