import {EventEmitter, Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
@Injectable()
export class ApiService {

  // 中间人
  searchEvent:EventEmitter<SearchProducesParameter> = new EventEmitter();

  public produces: Produce[] = [
    new Produce(1,"白云边","白酒",3000,2,"苹果4/8.8折","http://placehold.it/320x150"),
    new Produce(2,"苹果5","电子产品",4000,4,"苹果5/8.8折","http://placehold.it/320x150"),
    new Produce(3,"苹果6","电子产品",5000,3,"苹果6/8.8折","http://placehold.it/320x150"),
    new Produce(4,"苹果7","电子产品",6000,3,"苹果7/8.8折","http://placehold.it/320x150"),
    new Produce(5,"JAVA","书籍",7000,4,"苹果8/8.8折","http://placehold.it/320x150"),
    new Produce(6,"苹果8","电子产品",8000,2,"苹果9/8.8折","http://placehold.it/320x150"),
  ];

  public commentaries: Commentaries[] = [
    new Commentaries(1,"hulei",5,"很好!",new Date),
    new Commentaries(1,"hulei",4,"很好!",new Date),
    new Commentaries(2,"hulei",5,"很好!!",new Date)
  ];

  constructor(private http: Http) {
  }

  //商品信息
  getProduces() :Observable <Produce[]> {
    // 请求头信息
    let header: Headers = new Headers();
    header.append("Authorization","apikey f756d3e702e341a1af8044b0910dcffb")
    return this.http.get('/api/produces.json',{headers: header}).map(res => res.json());
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
    return ['电子产品','书籍','白酒'];
  }

  // 搜索
  searchProduces(params: SearchProducesParameter) :Observable <Produce[]> {
    return this.http.get('/api/produces.json',{search:this.encodeParams(params)}).map(res => res.json());
  }

  private encodeParams(params: SearchProducesParameter) {
    //第一个表示会把所有的参数的key值拿出来变成一个数组集合
    //第二个表示过滤传入参数中没有值的对象,filter具体的方式,参考百度
    //第三个 首先new URLSearchParams并把sum类型定义为此,sum中有一个方法,append
    return Object.keys(params)
      .filter(key => params[key])
      .reduce((sum:URLSearchParams,key:string) =>{
        sum.append(key,params[key]);
        return sum;
      },new URLSearchParams);
  }

}

export class Produce {

  constructor(
    public id: number,
    public title: string,
    public type: string,
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

export class SearchProducesParameter {
  constructor(
    public title: string,
    public price: number,
    public type: number,
  ){}
}
