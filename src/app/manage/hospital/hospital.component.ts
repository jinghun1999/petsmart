import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css'],
  animations: [routerTransition()]
})
export class HospitalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
