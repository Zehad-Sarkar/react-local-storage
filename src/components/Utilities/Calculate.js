// const add = (first, second) => {
//   return first + second;
// }

// const multiply = (first, second) => {
//   return first * second;
// }

// const substruct = (first, second) => {
//   return first - second;
// }

//reduce fn for total cart price
const getTotalPrice = (productPrice) => {
  const reducer=(previous,current)=>previous+current.price
  const total = productPrice.reduce(reducer , 0);
  return total;
}
//ekadhik function k export korte hole export likhe {add,multiply,etc....}
// export { add, multiply,substruct,getTotalPrice }
export { getTotalPrice }


// export default add; //only ekta function ke export korle export default add evabe korte hobe