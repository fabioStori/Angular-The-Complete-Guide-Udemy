import { Component, OnInit, Input, ViewChild, ElementRef, ContentChild } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: {
    type: string;
    name: string;
    content: string;
  };

  @Input() name: string;

  @ViewChild("heading", {static: true}) header: ElementRef;

  @ContentChild("contentParagraph", {static: true}) paragraph: ElementRef;  //used to get access to a content that is not in this component, but
                                                                            //it is passed via <ng-content></ng-content>; see app.component.html to
                                                                            //see where 'paragraph' is created
  constructor() {}

  ngOnInit(): void {}

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("ngOnChanges called");
  //   console.log(changes);
  // }

  // ngOnInit(): void {
  //   console.log("ngOnInit called");
  // }

  // ngDoCheck() {
  //   console.log("ngDoCheck called");
  // }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit called");
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked called");
  // }

  // ngAfterViewInit() {
  //   console.log("AfterViewInit called");
  // }

  // ngAfterViewChecked() {
  //   console.log("AfterViewChecked called");
  // }

  // ngOnDestroy() {
  //   console.log("ngOnDestroy called");
  // }
}
