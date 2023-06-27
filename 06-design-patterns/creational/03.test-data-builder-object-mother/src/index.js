/*
  ProductId: Should be between 2 and 30 characters
  Name: Should be only words
  Price: Should be from zero to a thousand
  Category: Should be eletronic or organic
*/


function productValidator(product){
  const errors = []

  if(!(product.id.length >= 2  && product.id <= 20)){
    errors.push(`id: invalid length, current [${product.id}] expected to be between 2 and 20`)
  }

  if(/(\W|\d)/.test(product.name)){
    errors.push(`name: invalid value, current [${product.name}] expected to have only words`)
  }

  if(!(product.price >= 1 && product.price <= 1000)){
    errors.push(`price: invalid value, current [${product.price}] expected  to be between 1 and 1000`)
  }

  if(!(['eletronic', 'organic'].includes(product.category))){
    errors.push(`product: invalid value, current [${product.category}] expected  to be either eletronic or organic`)
  }

  return {
    result: errors.length === 0,
    errors
  }
}


module.exports = {
  productValidator
}