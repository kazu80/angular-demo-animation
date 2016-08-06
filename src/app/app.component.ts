import {Component, trigger, state, style, transition, animate, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('buttonState', [
      state('play', style({
        "background-image": 'url("/images/play.svg")',
        transform: 'scale(1.1)'
      })),
      state('stop', style({
        "background-image": 'url("/images/stop.svg")',
        transform: 'scale(1)'
      })),
      transition('play => stop', animate('100ms ease-in')),
      transition('stop => play', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit{
  public state : string;

    ngOnInit(): void {
      this.state = "stop";
    }

    private onClick() {
      this.state = this.state === "play" ? "stop" : "play";
    }
}
