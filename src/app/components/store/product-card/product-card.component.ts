import { Component, OnInit, Input } from "@angular/core";
import { Product } from 'src/app/models/product.model';
import { CartUtil } from 'src/app/utils/cart.util';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {}

  addToCart() {
    CartUtil.add(
      this.product._id,
      this.product.title,
      this.product.slug,
      1,
      this.product.price,
      this.product.image
    );
    this.toastr.success(
      `${this.product.title} adicionado ao carrinho`,
      "Produto Adicionado"
    );
  }
}
