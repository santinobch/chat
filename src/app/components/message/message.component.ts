import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor() { }

  user_: string = "";
  time_: string = "";
  right_: boolean = false;

  @Input()
  get user(): string { return this.user_; }
  set user(v: string) { this.user_ = v  };

  @Input()
  get time(): string { return this.time_; }
  set time(v: string) { this.time_ = v  };

  @Input()
  get right(): boolean { return this.right_; }
  set right(v: boolean) { this.right_ = v  };

  ngOnInit(): void {
  }
}
