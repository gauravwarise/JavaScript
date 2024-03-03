prices = [199, 299, 99, 399, 499, 99, 899]
console.log('-------- continue---------');
for (price of prices){
    if(price==99){
        continue;
    }
    console.log(`${price} added to cart`);
}

console.log('--------break---------');
for (price of prices){
    if(price==99){
        break;
    }
    console.log(`${price} added to cart`);
}