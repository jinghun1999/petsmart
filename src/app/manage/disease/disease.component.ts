import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';
import {PagerModel} from '../../_models';
import {HospitalService} from '../../services/hospital.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css'],
  animations: [routerTransition()]
})
export class DiseaseComponent implements OnInit {
  page = 1;
  total = 0;
  pageData = new PagerModel();

  constructor(private hospitalService: HospitalService) {
  }

  ngOnInit() {
    this.getPager();
  }

  getPager() {
    this.hospitalService.getHospitalPager(this.page).subscribe((res) => {
      if (res.successful) {
        this.pageData = res.data as PagerModel;
        this.total = this.pageData.total;
      }
    });
  }

  pageChanged(page: number): void {
    this.page = page;
    this.getPager();
  }
}
