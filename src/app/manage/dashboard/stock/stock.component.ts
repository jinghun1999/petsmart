import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  animations: [routerTransition()]
})
export class StockComponent implements OnInit {
  page = 1;
  total = 0;
  rows = [];

  constructor() {
  }

  ngOnInit() {
    this.getPager();
  }

  getPager() {
    // this.hospitalService.getHospitalPager(this.page).subscribe((res) => {
    //   if (res.successful) {
    //     this.pageData = res.data as PagerModel;
    //     this.total = this.pageData.total;
    //   }
    // });
    this.total = 3;
    this.rows = [{id: 1, shop: '上海浦东店', classify: '宠物药品', drug_name: '兽用胃复安', barcode: 'Q0983889101', sell_price: 89.30, left_num: 20},
      {id: 2, shop: '北京朝阳店', classify: '宠物药品', drug_name: '兽用西米', barcode: 'Q09838893931', sell_price: 109.30, left_num: 32},
      {id: 3, shop: '上海浦东店', classify: '宠物药品', drug_name: '泼尼松', barcode: 'Q09838893234', sell_price: 76.88, left_num: 902}];
  }

  pageChanged(page: number): void {
    this.page = page;
    this.getPager();
  }

  changeAnimal(): void {
    setTimeout(() => {
      // alert(this.selectedAnimal);
      // 1
    }, 1);
  }
}
