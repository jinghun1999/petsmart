import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Medicate} from '../../models';

@Component({
  selector: 'app-medicate',
  templateUrl: './medicate.component.html',
  styleUrls: ['./medicate.component.css']
})

export class MedicateComponent implements OnInit {
  public medication: Medicate[];
  public med_list: any[];
  public mobile: any;

  ngbModalRef: NgbModalRef;

  private states = ['13820380032', '18312013232', '13520383321', '13820380423', '13820381532', '18332013232', '15820383322', '17620380423', '13920381532'];

  constructor(private modalService: NgbModal) {
  }

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

  open(content) {
    this.ngbModalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  search_mobile = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  onSubmit(value: any): void {

  }

  get total_price(): number {
    return this.medication.reduce((result, item) => item.price * item.count + result, 0);
  }
}
