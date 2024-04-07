import { Component, inject, signal, effect } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  hideSideMenu = signal(true);
  
  // total = signal(0);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu()
  {
    this.hideSideMenu.update(prevState => !prevState);
  }
  

  // ngOnChanges(changes: SimpleChanges)
  // {
  //   const cart = changes['cart'];
  //   if (cart)
  //   {
  //     this.total.set(this.getTotalPrice());
  //   }
  // }

  // getTotalPrice() {
  //   return this.cart.reduce((total, product) => total + product.price, 0);
  // }
}
