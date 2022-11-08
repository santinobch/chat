import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, lastValueFrom } from 'rxjs';

@Component({
  selector: 'themed-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(
  ) { }

  @ViewChild('input') inputElement!: ElementRef;

  public type_: string = "";
  public placeholder_: string = "";

  @Input()
  get type(): string { return this.type_; }
  set type(v: string) { this.type_ = v  };

  @Input()
  get placeholder(): string { return this.placeholder_; }
  set placeholder(v: string) { this.placeholder_ = v  };

  @Output() getObserver = new EventEmitter<ElementRef>();

  ngOnInit(): void {
  }

  nextValue() {
    this.getObserver.emit(this.inputElement);
  }
}
