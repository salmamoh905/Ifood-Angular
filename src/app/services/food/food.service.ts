import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():string[]{
    return [
      '/assets/burger.jpg',
      '/assets/chicken.jpg',
      '/assets/meatballs.jpg',
    ]
  }
}
