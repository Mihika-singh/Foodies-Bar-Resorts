import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FoodViewService {
  totalItems: { count: number, dishes: string, prices: number } = {
    count: 0,
    dishes: "",
    prices: 0,
  }

  getTotal(): Observable<{ count: number, dishes: string, prices: number }> {
    return of(this.totalItems)
  }
  addToCart(dish: string, price: number) {
    if (this.totalItems.count > 0) {
      this.totalItems.dishes += ' ,' + dish;
      this.totalItems.count++;
      this.totalItems.prices += price;

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
      this.totalItems.prices -= price;
      this.totalItems.dishes = dish+"";

    }
    else if (this.totalItems.count === 0) {
      this.totalItems.count = 0;
      this.totalItems.prices = 0; 
      this.totalItems.dishes = "";


    }


  }
  getNorth(id: number) {
    return this.getNorthIn()
      .pipe(
        map(NorthIn => {
          return NorthIn.filter(NorthI => NorthI.id === id)[0]
        })
      )
  }
  getNorthIn() {
    return of([
      {
        "id": 0,
        "dish": "Kadai Paneer",
        "stars": 4.0,
        "price": 120,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 1,
        "dish": "Paneer Korma",
        "stars": 3.9,
        "price": 110,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 2,
        "dish": "Mix Veg",
        "stars": 4.0,
        "price": 130,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 3,
        "dish": "dal makhani",
        "stars": 3.6,
        "price": 110,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 4,
        "dish": "Stuffed naan",
        "stars": 4.2,
        "price": 40,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 5,
        "dish": "Shahi Paneer",
        "stars": 4.0,
        "price": 130,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 6,
        "dish": "Tadka dal",
        "stars": 3.7,
        "price": 90,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 7,
        "dish": "Raita",
        "stars": 5.0,
        "price": 80,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 8,
        "dish": "Mix raita",
        "stars": 4.0,
        "price": 100,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 9,
        "dish": "Papad",
        "stars": 3.5,
        "price": 10,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 10,
        "dish": "Masala Papad",
        "stars": 4.0,
        "price": 12,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
    ])
  }

}
