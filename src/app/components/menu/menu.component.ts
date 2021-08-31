import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() emissor: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  mostrarModal() {
    console.log('abriu modal');
    this.emissor.emit();
  }
}
