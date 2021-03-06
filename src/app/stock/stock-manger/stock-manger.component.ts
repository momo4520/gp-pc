import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-manger',
  templateUrl: './stock-manger.component.html',
  styleUrls: ['./stock-manger.component.css']
})
export class StockMangerComponent implements OnInit {
  private stocks: Array<Stock>;

  constructor() {
  }

  ngOnInit() {
    this.stocks = [
      new Stock(1, '第一支股票', 1.99, 3.5, '这是第一支股票，是我在学习Angular入门实战创建的', ['IT', '互联网']),
      new Stock(2, '第二支股票', 2.99, 2.4, '这是第二支股票，是我在学习Angular入门实战创建的', ['互联网']),
      new Stock(3, '第三支股票', 3.99, 1.5, '这是第三支股票，是我在学习Angular入门实战创建的', ['IT']),
      new Stock(4, '第四支股票', 4.99, 4.5, '这是第四支股票，是我在学习Angular入门实战创建的', ['IT', '金融']),
      new Stock(5, '第五支股票', 5.99, 4.9, '这是第五支股票，是我在学习Angular入门实战创建的', ['金融', '互联网']),
      new Stock(6, '第六支股票', 6.99, 4.5, '这是第六支股票，是我在学习Angular入门实战创建的', ['金融']),
      new Stock(7, '第七支股票', 7.99, 4.9, '这是第七支股票，是我在学习Angular入门实战创建的', ['IT', '互联网'])
    ];
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
