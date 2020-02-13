import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {

  @Input() product;

  showImage(image){
    (document.querySelector("#" + this.product.id) as HTMLImageElement).src = image;
  }

  share(){
    (document.querySelector("#" + this.product.id + "l") as HTMLLinkElement).href = "tg://msg_url?url="  + this.product.link + "&amp;text=text";
  }
}