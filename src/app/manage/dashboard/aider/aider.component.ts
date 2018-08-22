import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-aider',
  templateUrl: './aider.component.html',
  styleUrls: ['./aider.component.css'],
  animations: [routerTransition()]
})
export class AiderComponent implements OnInit {
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
    this.rows = [{id: 1, shop: '上海浦东店', animal: '猫', disease: '癫痫', guest: '散客', date: '2018-08-13 15:32', money: 189.30},
      {id: 2, shop: '北京朝阳店', animal: '狗', disease: '热射病', guest: '王先生(13044023023)', date: '2018-08-12 08:55', money: 109.30},
      {id: 3, shop: '上海浦东店', animal: '狗', disease: '热射病', guest: '朱彤(18307234234)', date: '2018-08-10 13:32', money: 176.88}];
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
