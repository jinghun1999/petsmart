import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {PagerModel} from '../../models';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css'],
  animations: [routerTransition()]
})
export class DiseaseComponent implements OnInit {
  page = 1;
  total = 0;
  rows = [];
  selectedAnimal = '狗';

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
    this.total = 5;
    this.rows = [{Id: 1, Classify: '口腔疾病', DiseaseName: '口炎'},
      {Id: 2, Classify: '肠胃疾病', DiseaseName: '急性胃炎'},
      {Id: 3, Classify: '肠胃疾病', DiseaseName: '慢性胃炎'}];
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
