import { Component, OnInit } from '@angular/core';
import {Medicate} from '../../../models';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-disease-edit',
  templateUrl: './disease-edit.component.html',
  styleUrls: ['./disease-edit.component.css']
})
export class DiseaseEditComponent implements OnInit {
  public medication: Medicate[];
  public med_list: any[];

  ngbModalRef: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.loadMed();
  }

  loadMed(): void {
    this.medication = [{id: '1', name: '氯丙嗪', count: 1, price: 32, desc: '氯丙嗪1-2mg/kg肌注进行降温'},
      {id: '2', name: '地塞米松', count: 1, price: 94.2, desc: '严重休克时，地塞米松'},
      {id: '3', name: '林格氏液', count: 1, price: 102.4, desc: '休克的—静注加5%碳酸氢钠的林格氏液，输液中注意监测Ht值，防止肺水肿。'}];

    this.med_list = [{id: '20300101012', name: '0.1%高锰酸钾', left_num: 223010, standard: 'mL', price: 23.45, desc: '清洗消毒用品'},
      {id: '20300101034', name: '倍他米松', standard: '盒', left_num: 500, price: 49.42, desc: '适应症为用于过敏性皮炎、湿疹、神经性皮炎、脂溢性皮炎及瘙痒症等'}];
  }
  open(content) {
    this.ngbModalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  select_med(m): void {
    this.medication.push({id: m.id, name: m.name, count: 1, price: m.price, desc: m.desc});
    this.ngbModalRef.close();
  }
  delete_med(o: any): void {
    const i = this.medication.indexOf(o);
    if (i > -1) {
      this.medication.splice(i, 1);
    }
  }
}
