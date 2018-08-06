import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {HospitalService} from '../../services/hospital.service';
import {PagerModel} from '../../_models';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css'],
  animations: [routerTransition()]
})
export class HospitalComponent implements OnInit {
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
