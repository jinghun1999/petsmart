import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {LABELS} from '../models/mock-labels';

const states = ['发烧', '流鼻涕', '恶心', '呕吐', '大便有血', '大便粘液', '食欲不振'];

@Component({
  selector: 'app-choose-lable',
  templateUrl: './choose-lable.component.html',
  styleUrls: ['./choose-lable.component.css']
})
export class ChooseLableComponent implements OnInit {
  title = '宠物症状';
  public label_text: string;
  selected: number[];
  labels = LABELS;
  @Input() pet_mode: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getRs();
  }

  getRs(): void {
    this.selected = [];
    this.pet_mode = this.route.snapshot.paramMap.get('id');
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  select (id: number): void {
    const index = this.selected.indexOf(id);
    if (index > -1) {
      this.selected.splice(index, 1);
    } else {
      this.selected.push(id);
    }
  }

  analyze (): void {

  }
}
