import { TestBed, ComponentFixture } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';

describe('App', () => {
  let fixture: ComponentFixture<HelloWorldComponent>;
  let component: HelloWorldComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [HelloWorldComponent] });

    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component instanceof HelloWorldComponent).toBe(true);
  });

  it('should have the hello world message', () => {
    expect(component.message).toBe('Hello World!');
  });
});