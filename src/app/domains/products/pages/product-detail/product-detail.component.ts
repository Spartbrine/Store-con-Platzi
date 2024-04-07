import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { ProductComponent } from '@products/components/product/product.component';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})


export default class ProductDetailComponent {
  
  @Input() id?: string;
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  product = signal<Product | null>(null);
  cover = signal('');

  ngOnInit()
  {
    if(this.id)
    {
      this.productService.getOneProduct(this.id).subscribe({
        next:  (product) => {
          this.product.set(product);
          if(product.images.length > 0)
          {
            this.cover.set(product.images[0])
          }
        }
      });
    }
  }

  changeCover(newImg : string)
  {
    this.cover.set(newImg);
  }

  addToCart()
  {
    const product = this.product();
    if(product)
    {
      this.cartService.addToCart(product);

    }
  }


}
