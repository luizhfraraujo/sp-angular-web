import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/models/product.model";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.css"]
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<Product[]> = null;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.products$ = this.storeService.getProducts();
  }
}
