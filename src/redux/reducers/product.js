import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/action-types";

const DUMMY_PRODUCTS = [
  {
    id: "m1",
    name: "7Up",
    description: "Refreshing cold drink!",
    price: 35,
    image: "https://picsum.photos/200/300",
  },
  {
    id: "m2",
    name: "Uncle Chips",
    description: "Made of parmesan and herbs!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Iced tea",
    description: "Keeps you awake!",
    price: 100.0,
  },
  {
    id: "m4",
    name: "Tropicana Juice",
    description: "Juicy orange juice",
    price: 15.0,
  },
  {
    id: "m5",
    name: "Oats",
    description: "Best of Quaker!",
    price: 150.0,
  },
  {
    id: "m6",
    name: "Lays",
    description: "Potato chips",
    price: 20.0,
  },
  {
    id: "m7",
    name: "Pepsi",
    description: "Taste the thunder!",
    price: 45.0,
  },
  {
    id: "m8",
    name: "Mountain Dew",
    description: "Dar ke aage jeet hai!",
    price: 45.0,
  },
  {
    id: "m9",
    name: "Doritos",
    description: "Taste bhi health bhi!",
    price: 60.99,
  },
  {
    id: "m10",
    name: "Diet Mist Twist",
    description: "Twisty Misty!",
    price: 116.5,
  },
  {
    id: "m11",
    name: "Orange Juice",
    description: "Freshly squeezed orange juice",
    price: 20.99,
  },
  {
    id: "m12",
    name: "Ching's Singapore",
    description: "Singaporean noodles",
    price: 75.0,
  },
  {
    id: "m13",
    name: "Herschey's Kisses",
    description: "Exotic dark chocolate!",
    price: 50.5,
  },
  {
    id: "m14",
    name: "Knorr Soup",
    description: "Hot and sour soup!",
    price: 12.0,
  },
  {
    id: "m15",
    name: "Top Ramen",
    description: "Soupy noodles!",
    price: 20.5,
  },
  {
    id: "m416",
    name: "Dairy Milk",
    description: "Silky sweetness!",
    price: 100.99,
  },
];

const initialState = {
  products: [],
  totalAmount: 0,
  allProducts: DUMMY_PRODUCTS,
  displayProducts: [],
};

export default (state = initialState, action) => {
  if (action.type === ADD_PRODUCT) {
    const updatedTotalAmount =
      state.totalAmount + action.product.price * action.product.amount;

    const existingCartProductIndex = state.products.findIndex(
      (product) => product.id === action.product.id
    );
    const existingCartProduct = state.products[existingCartProductIndex];
    let updatedProducts;

    if (existingCartProduct) {
      const updatedProduct = {
        ...existingCartProduct,
        amount: existingCartProduct.amount + action.product.amount,
      };
      updatedProducts = [...state.products];
      updatedProducts[existingCartProductIndex] = updatedProduct;
    } else {
      updatedProducts = state.products.concat(action.product);
    }

    return {
      products: updatedProducts,
      totalAmount: updatedTotalAmount,
      allProducts: state.allProducts,
      displayProducts: state.displayProducts,
    };
  }
  if (action.type === REMOVE_PRODUCT) {
    const existingCartProductIndex = state.products.findIndex(
      (product) => product.id === action.id
    );
    const existingProduct = state.products[existingCartProductIndex];
    const updatedTotalAmount = state.totalAmount - existingProduct.price;
    let updatedProducts;
    if (existingProduct.amount === 1) {
      updatedProducts = state.products.filter(
        (product) => product.id !== action.id
      );
    } else {
      const updatedProduct = {
        ...existingProduct,
        amount: existingProduct.amount - 1,
      };
      updatedProducts = [...state.products];
      updatedProducts[existingCartProductIndex] = updatedProduct;
    }

    return {
      products: updatedProducts,
      totalAmount: updatedTotalAmount,
      allProducts: state.allProducts,
      displayProducts: state.displayProducts,
    };
  }
  if (action.type === "SET_SEARCH_TERM") {
    const searchTerm = action.payload;
    const filteredProducts = state.allProducts.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return {
      ...state,
      displayProducts: filteredProducts,
    };
  }

  return state;
};
