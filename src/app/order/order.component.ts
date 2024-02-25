import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent  implements AfterViewInit {
  @ViewChild('productColors') productColors!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    $(this.productColors.nativeElement).find('span').click((event: any) => {
      const target = event.target;
      $(this.productColors.nativeElement).find('span').removeClass('active');
      $(target).addClass('active');

      // Apply styles
      this.renderer.setStyle(target, 'border-color', $(target).attr('data-color-sec'));
      this.renderer.setStyle(document.body, 'background', $(target).attr('data-color-primary'));
      this.renderer.setStyle(this.productColors.nativeElement.querySelector('.content h2'), 'color', $(target).attr('data-color-sec'));
      // ... (other style modifications)

      // Change the image source
      const imgSrc = $(target).attr('data-pic') || '';
      this.renderer.setAttribute(this.productColors.nativeElement.querySelector('.imgBx img'), 'src', imgSrc);
    });
  }
}
