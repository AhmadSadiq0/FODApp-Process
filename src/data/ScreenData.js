


// import { IMAGE16,IMAGE17,IMAGE18 } from "../res/drawables";
import { BURGERIMG, IMAGE16, IMAGE17, IMAGE18 } from "../res/drawables";
 
export const initialCartItems = [
  {
    id: 1,
    name: 'Double Cheese Burger',
    price: 99,
    serving: 'Single Serving',
    image: BURGERIMG,
    active: false, 
    originalIndex: 0,
  },
  {
    id: 2,
    name: 'Cheese Burger',
    price: 49, 
    serving: 'Single Serving',
    image: BURGERIMG,
    active: false,
    originalIndex: 1,
  },
  {
    id: 3,
    name: 'Biryani',
    price: 99,
    serving: 'Single Serving',
    image: BURGERIMG,
    active: false,
    originalIndex: 2,
  },
];

export const burgerData = [
  {
    id: 1,
    name: "Double Cheese Burge",
    price: 59,
   image: BURGERIMG,
  },
  {
    id: 2,
    name: "Cheese Burge",
    price: 49,
    image: BURGERIMG,
  },
  {
    id: 3,
    name: "Chicken Burge",
    price: 39,
   image: BURGERIMG,
  },
  {
    id: 4,
    name: "Chicken Burge is available here in our resturent and how you can access it",
    price: 39,
    image: BURGERIMG,
  },
];




//MenuScreen
 export const categories = [
    {
      id: 1,
      name: "Burgers",
      image: IMAGE16,
    },
    {
      id: 2,
      name: "Pizzas",
      image: IMAGE18,
    },
    {
      id: 3,
      name: "Kebabs",
      image: IMAGE17,
    },
  ];
