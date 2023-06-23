/*
  ProductId: Should be between 2 and 30 characters
  Name: Should be only words
  Price: Should be from zero to a thousand
  Category: Should be eletronic or organic
*/


function productValidator(product){
  const errors = []

  return {
    result: errors.length === 0,
    errors
  }
}


module.exports = {
  productValidator
}