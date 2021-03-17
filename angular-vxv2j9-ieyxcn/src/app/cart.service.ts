import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Shipping } from "./shipping/shipping.interface";

@Injectable()
export class CartService {
  items = [];
  configUrl = "/assets/shipping.json";
  constructor(private http: HttpClient) {}

  addtoCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): any {
    let teste = this.http.get<Shipping[]>(this.configUrl);
    console.log("passou aqui ");
    console.log(teste);
    return teste;
  }
}
