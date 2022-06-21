import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  // getAll():string[]{
  //   return [
  //     '/assets/cakes.jpeg',
  //     '/assets/burger.jpg',
  //     '/assets/roast.jpeg',
  //     '/assets/vegpex.jpeg',

  //   ]
  // }
  getAll():Foods[]{
    return[
      {
        id:1,
        name: 'food',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl: '/assets/cakes.jpeg',
        tags:['FastFood', 'Pizza','Lunch'],
      },
      {
        id:2,
        name: 'food',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['Somalian'],
        stars:4.5,
        imageUrl: '/assets/burger.jpg',
        tags:['FastFood', 'Pizza','Lunch'],

      },
      {
        id:3,
        name: 'food',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['India'],
        stars:4.5,
        imageUrl: '/assets/roast.jpeg',
        tags:['FastFood', 'Pizza','Lunch'],

      },
      {
        id:4,
        name: 'food',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['Spain'],
        stars:4.5,
        imageUrl: '/assets/vegpex.jpeg',
        tags:['FastFood', 'Pizza','Lunch'],
      }
    ]
  }
}
