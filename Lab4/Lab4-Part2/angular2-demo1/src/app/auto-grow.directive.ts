import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appAutoGrow]',
  host:{
    '(focus)':'onFocus()',
    '(blur)':'onBlur()'
  }
  
})


export class AutoGrowDirective {

   constructor(private el: ElementRef,private renderer:Renderer) { 
   };
  

  onBlur(){
    this.renderer.setElementStyle(this.el.nativeElement,'width','15rem');
  };

  onFocus(){
    this.renderer.setElementStyle(this.el.nativeElement,'width','25rem');
  };


 

}
