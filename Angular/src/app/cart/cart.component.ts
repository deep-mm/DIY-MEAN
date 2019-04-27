import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./bootstrap.min.css', './cart.component.css']
})

export class CartComponent implements OnInit {

  cartitems = [
    {name: 'Wall Art',
    price: '$67',
      quantity: '2'
    },
    {name: 'Wall Art',
      price: '$67',
      quantity: '3'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
