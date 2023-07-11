import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myColor]',
})
export class MyColorDirective {
  constructor(ElementRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(ElementRef.nativeElement, 'color', 'green');
  }
}
