import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { of, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FoodsDetailService {

  constructor() { }
  totalItems: { count: number, dishes: string, prices: number } = {
    count: 0,
    dishes: "",
    prices: 0,
  }
  totalQuantity: { count: number, dishes: string, prices: number } = {
    count: 0,
    dishes: "",
    prices: 0,
  }
  getTotal(): Observable<{ count: number, dishes: string, prices: number }> {
    return of(this.totalItems)
  }
  getTotal1(): Observable<{ count: number, dishes: string, prices: number }> {
    return of(this.totalQuantity)
  }
  addToCart(dish: string, price: number) {
    if (this.totalItems.count > 0) {
      this.totalItems.dishes += ' ,' + dish;
      this.totalItems.count++;
      this.totalItems.prices = price*this.totalItems.count;

    }
    else {
      this.totalItems.dishes += dish;
      this.totalItems.count++;
      this.totalItems.prices += price;

    }
  }
  removeFromCart(dish: string, price: number) {
    if (this.totalItems.count > 0) {
      this.totalItems.count--;
      this.totalItems.dishes = dish + "";
      this.totalItems.prices -= price;
    }
    else if (this.totalItems.count === 0) {
      this.totalItems.count = 0;
      this.totalItems.dishes = "";
      this.totalItems.prices = 0;
    }
  }
  cart(price:number,dish:string){
    this.totalQuantity.count++;
this.totalQuantity.prices=price*this.totalQuantity.count;
this.totalQuantity.dishes=dish;
  }
  getFoodDetail(id: number) {
    return this.getFoodDetails()
      .pipe(
        map((foodInfo: any[]) => {
          return foodInfo.filter((food: { id: number; }) => food.id === id)[0]
        })
      )
  }
  getFoodDivision(route: string) {
    return this.getFoodDetails()
      .pipe(
        map(foodInfo => {
          return foodInfo.filter(foods => foods.route === route)
        })
      )
  }
  getFoodDetails() {
    return of([{
      "id": 0,
      "dish": "Kadai Paneer",
      "stars": 4.0,
      "price": 120,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "north"
    },
    {
      "id": 1,
      "dish": "Paneer Korma",
      "stars": 3.9,
      "price": 110,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "north"
    },
    {
      "id": 2,
      "dish": "Mix Veg",
      "stars": 4.0,
      "price": 130,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "north"
    },
    {
      "id": 3,
      "dish": "dal makhani",
      "stars": 3.6,
      "price": 110,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "north"
    },
    {
      "id": 4,
      "dish": "Stuffed naan",
      "stars": 4.2,
      "price": 40,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "north"
    },
    {
      "id": 5,
      "dish": "Shahi Paneer",
      "stars": 4.0,
      "price": 130,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "north"
    },
    {
      "id": 6,
      "dish": "Tadka dal",
      "stars": 3.7,
      "price": 90,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "north"
    },
    {
      "id": 7,
      "dish": "Raita",
      "stars": 5.0,
      "price": 80,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "north"
    },
    {
      "id": 8,
      "dish": "Mix raita",
      "stars": 4.0,
      "price": 100,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "north"
    },
    {
      "id": 9,
      "dish": "Papad",
      "stars": 3.5,
      "price": 10,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "north"
    },
    {
      "id": 10,
      "dish": "Masala Papad",
      "stars": 4.0,
      "price": 12,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "north"
    },
    {
      "id": 11,
      "dish": "Plain dosa",
      "stars": 3.6,
      "price": 120,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "south"
    },
    {
      "id": 12,
      "dish": "Masala dosa",
      "stars": 4.5,
      "price": 140,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "south"
    },
    {
      "id": 13,
      "dish": "Rawa dosa",
      "stars": 4.0,
      "price": 160,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "south"
    },
    {
      "id": 14,
      "dish": "Rawa Masala dosa",
      "stars": 4.6,
      "price": 110,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "south"
    },
    {
      "id": 15,
      "dish": "Mysore Masala dosa",
      "stars": 4.2,
      "price": 40,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "south"
    },
    {
      "id": 16,
      "dish": "Paneer dosa",
      "stars": 4.0,
      "price": 130,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "south"
    },
    {
      "id": 17,
      "dish": "Paneer Masala dosa",
      "stars": 3.7,
      "price": 190,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "south"
    },
    {
      "id": 18,
      "dish": "Sambhar bada",
      "stars": 5.0,
      "price": 110,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "south"
    },
    {
      "id": 19,
      "dish": "Idli",
      "stars": 4.0,
      "price": 110,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "south"
    },
    {
      "id": 20,
      "dish": "Paneer & Onion",
      "stars": 4.0,
      "price": 125,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "pizza"
    },
    {
      "id": 21,
      "dish": "Golden corn",
      "stars": 4.5,
      "price": 95,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "pizza"
    },
    {
      "id": 22,
      "dish": "Veg Loaded",
      "stars": 3.5,
      "price": 165,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "pizza"
    },
    {
      "id": 23,
      "dish": "Farm house",
      "stars": 4.6,
      "price": 269,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "pizza"
    },
    {
      "id": 24,
      "dish": "Indi Tandoori Paneer",
      "stars": 4.2,
      "price": 319,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",

      "route": "pizza"
    },
    {
      "id": 25,
      "dish": "Margherita",
      "stars": 4.0,
      "price": 130,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",

      "route": "pizza"
    },
    {
      "id": 26,
      "dish": "Cheesy veggies",
      "stars": 4.0,
      "price": 115,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",

      "route": "pizza"
    },
    {
      "id": 27,
      "dish": "Value Combo: 2 Garlic breads and cold drink",
      "stars": 5.0,
      "price": 198,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "pizza"
    },
    {
      "id": 28,
      "dish": "Value Combo: 2 Choco lava cake",
      "stars": 4.0,
      "price": 110,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "pizza"
    },
    {
      "id": 29,
      "dish": "Veg Momos",
      "stars": 4.0,
      "price": 99,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "chinese"
    },
    {
      "id": 30,
      "dish": "Paneer Momos",
      "stars": 4.5,
      "price": 125,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "chinese"
    },
    {
      "id": 31,
      "dish": "Paneer Crunchy fried Momos",
      "stars": 4.5,
      "price": 165,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "chinese"
    },
    {
      "id": 32,
      "dish": "Onion creamy fried Momos",
      "stars": 4.6,
      "price": 179,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "chinese"
    },
    {
      "id": 33,
      "dish": "Paneer grilled Momos",
      "stars": 4.2,
      "price": 169,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "chinese"
    },
    {
      "id": 34,
      "dish": "Fried Momos",
      "stars": 4.0,
      "price": 130,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "chinese"
    },
    {
      "id": 35,
      "dish": "Cheesy burger",
      "stars": 4.0,
      "price": 115,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "chinese"
    },
    {
      "id": 36,
      "dish": "Value Combo: Manchurian , Fried rice and Noodles ",
      "stars": 5.0,
      "price": 210,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "chinese"
    },
    {
      "id": 37,
      "dish": "Hakka Noodles",
      "stars": 4.0,
      "price": 150,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      "route": "chinese"
    },


    ])
  }
}
