import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserComponent } from "./user.component";
import { UserService } from "./user.service";

describe("UserComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    });
  });
  it("should create the app", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); //check if exists
  });
  it("should use the user name from the service", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });
  it("should display the username if user is logged in", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain(app.user.name);
  });
  it("should' t display the username if user is not logged in", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = false;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).not.toContain(
      app.user.name
    );
  });
});
