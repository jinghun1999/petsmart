import {Component, OnInit, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-analyze-result',
  templateUrl: './analyze-result.component.html',
  styleUrls: ['./analyze-result.component.css']
})
export class AnalyzeResultComponent implements OnInit, OnDestroy {
  title = '诊断结果';
  public process = 0;
  private timer;
  @Input() labels: number[];
  public isCollapsed1 = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;

  constructor() {
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      if (this.process >= 100) {
        if (this.timer) {
          clearInterval(this.timer);
        }
      } else {
        this.process += 5;
      }
    }, 200);
  }

  ngOnDestroy() {
    if (this.timer) {
      // clearInterval(this.timer);
    }
  }
}
