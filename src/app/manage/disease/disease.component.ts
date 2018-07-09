import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css'],
  animations: [routerTransition()]
})
export class DiseaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
