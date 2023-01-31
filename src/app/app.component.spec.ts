import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 't28'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('t28');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('t28 app is running!');
  });
});

describe("AppComponent", () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it("should set error message if username and password are missing", () => {
    component.onSubmit();

    expect(component.error).toBe("Username and password are required.");
    expect(component.success).toBe(false);
  });

  it("should set error message if username or password are incorrect", () => {
    component.username = "user";
    component.password = "incorrect";

    component.onSubmit();

    expect(component.error).toBe("Invalid username or password.");
    expect(component.success).toBe(false);
  });

  it("should set success to true if username and password are correct", () => {
    component.username = "user";
    component.password = "pass";

    component.onSubmit();

    expect(component.error).toBe("");
    expect(component.success).toBe(true);
  });
});
