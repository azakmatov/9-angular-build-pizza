import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopComponent} from "../../../shared/components/pop/pop.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  constructor(private modalService: NgbModal) {
  }

  @ViewChild(PopComponent)
  private popComponent!: PopComponent;

  ngAfterViewInit() {
    // this.modalService.open(this.popup, {});

    // // const modalRef = this.modalService.open(NgbdModalContent);
    // const modalRef = this.modalService.open(PopupComponent);
    // // modalRef.componentInstance.name = 'World';
    // modalRef.componentInstance.data = 'About component';

    this.popComponent.open();

  }
}
