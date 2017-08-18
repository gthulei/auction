import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit,OnChanges{

  // 生命周期 参数发生改变是触发
  ngOnChanges(changes: SimpleChanges): void {
    this.starsArry = [];
    for (let i =1; i<=5; i++){
      this.starsArry.push(i > this.stars);
    }
  }

  // 接受父组件参数
  @Input()
  public stars: number = 0;

  @Input()
  public readOnly: boolean = false;

  //将this.rating发射出去,让父组件接收,同步父组件参数
  @Output()
  // 参数+Change
  public starsChange:EventEmitter<number>=new EventEmitter();

  public starsArry: boolean[];

  constructor() {
  }

  ngOnInit() {
  }

  addStars(index :number) :void {
    if(this.readOnly){
      this.stars =index +1;
      // 让父组件组参数更新
      this.starsChange.emit(this.stars)
    }

  }

}
