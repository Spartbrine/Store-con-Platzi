import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { CartService } from './domains/shared/services/cart.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: ' <div class="container mx-auto"><app-header/><router-outlet/></div>',
})
export class AppComponent
{
  title = 'store';
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
}
