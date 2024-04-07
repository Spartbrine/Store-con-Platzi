import { Directive, ElementRef, inject } from '@angular/core';

@Directive({  //Como tal las directivas son para aplicar restricciones en el codigo
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {
  
  element = inject(ElementRef);

  constructor() { }

  ngOnInit()
  {
    this.element.nativeElement.style.backgroundColor = "red";
  }
}
