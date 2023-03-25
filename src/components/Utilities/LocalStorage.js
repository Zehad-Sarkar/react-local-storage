const addToDb = (_id) => {
  let shoppingCart = {};

  //get from shopping cart in localstorage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  else {
    shoppingCart = {};
}

  //add to shopping cart in localstorage
  const quantity = shoppingCart[_id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[_id] = newQuantity;
  } else {
    shoppingCart[_id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}




const addToDb1 = (id) => {
  let cartItem = {};
//get cartItem from local storage
  const storedItem = localStorage.getItem('cart-Item')
  if (storedItem) {
    cartItem=JSON.parse(storedItem)
  }

  
  //add cartItem to local storage
  const quantuty = cartItem[id];
  if (quantuty) {
    const newQuantity = quantuty + 1;
    cartItem[id] = newQuantity;
  }
  else {
    cartItem[id] = 1;
  }
    localStorage.setItem("cart-Item", JSON.stringify(cartItem));
}


//remove from localstorage
const removeFromDb = (_id) => {
  const storedItem = localStorage.getItem('shopping-cart')
  if (storedItem) {
    const removeCart = JSON.parse(storedItem);
    if (_id in removeCart) {
      delete removeCart[_id];
 localStorage.setItem("shopping-cart", JSON.stringify(removeCart));
    }
  }
}

//remove from localstorage
const removeFromDb1 = (id) => {
  const item = localStorage.getItem("cart-Item");
  if (item) {
    const removeCart = JSON.parse(item);
    if (removeCart) {
      delete removeCart[id]
      localStorage.setItem('cart-Item',JSON.stringify(removeCart))
    }
 }
}

export { addToDb, addToDb1, removeFromDb, removeFromDb1 };