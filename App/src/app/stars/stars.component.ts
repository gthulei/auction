import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  // 接受父组件参数
  @Input()
  public stars: number = 0;

  public starsArry: boolean[];

  constructor() {
  }

  ngOnInit() {
    // 需要定义
    this.starsArry = [];
    for (let i =1; i<=5; i++){
      this.starsArry.push(i > this.stars);
    }

  }

}
