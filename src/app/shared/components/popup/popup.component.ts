import {Component, Input} from '@angular/core';
@Component({ //этот компонент неполноценен, он служит лишь для хранения определённой части вёрстки
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  @Input() data: string = '';
}
