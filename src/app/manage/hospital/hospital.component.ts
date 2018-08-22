import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {routerTransition} from '../../router.animations';
import {HospitalService} from '../../services/hospital.service';
import {Hospital, PagerModel} from '../../models';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css'],
  animations: [routerTransition()]
})

export class HospitalComponent implements OnInit {
  page = 1;
  total = 0;
  hospitals: Hospital[];
  ngbModalRef: NgbModalRef;
  private registForm: FormGroup;
  @Input() hos: Hospital;

  constructor(private modalService: NgbModal,
              private hospitalService: HospitalService) {
  }

  ngOnInit() {
    this.getPager();
  }

  getPager() {
    this.hospitalService.getHospitalPager(this.page).subscribe((res) => {
      if (res.successful) {
        this.hospitals = res.data.rows as Hospital[];
        const pageData = res.data as PagerModel;
        this.total = pageData.total;
      }
    });
  }

  pageChanged(page: number): void {
    this.page = page;
    this.getPager();
  }

  open(modal, hos: Hospital) {
    this.hos = hos ? hos : new Hospital();

    this.ngbModalRef = this.modalService.open(modal);
    return this.ngbModalRef;
  }

  delete(hos: Hospital) {
    if (confirm('确定要删除吗？')) {
      this.hospitalService.delete(hos.Id).subscribe((res) => {
        this.getPager();
      });
    }
  }

  save(): void {
    this.hospitalService.saveHospital(this.hos).subscribe((res) => {
      this.ngbModalRef.close();
      this.getPager();
    });
  }
}
