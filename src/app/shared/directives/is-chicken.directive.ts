import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[isChicken]'
})
export class IsChickenDirective implements OnInit {

  constructor(
    //templateRef будет содержать содержимое нашего template (шаблона)
    private templateRef: TemplateRef<any>,
    //viewContainer будет содержать (ссылаться на) весь ng-template-элемент
    private viewContainer: ViewContainerRef
  ) { }

  @Input()
  isChicken: string = '';

  ngOnInit() {
    if (this.isChicken.toLowerCase().includes('кур')) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }


  //Можно так:
  // set isChicken(description: string) {
  //   if (description.toLowerCase().includes('кур')) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }

}
