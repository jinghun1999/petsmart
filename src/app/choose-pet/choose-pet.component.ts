import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-pet',
  templateUrl: './choose-pet.component.html',
  styleUrls: ['./choose-pet.component.css']
})
export class ChoosePetComponent implements OnInit {
  title = '爱宠诊疗';
  selectedPetMode: string;

  constructor() { }

  ngOnInit() {
  }

  onSelect(pm: string): void {
    this.selectedPetMode = pm;
  }
}
