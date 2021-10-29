function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки
    let shippingSum; 

    if(productsSum == 0){ 
        shippingSum = 0; 
     }
    

    if(productsSum >= freeShippingMinSum){ 
        shippingSum = 0;
     }
    

    if(productsSum > 0 && productsSum < freeShippingMinSum){
        shippingSum = shippingPrice;
     }   

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах
    let discountSum
    if(productsSum >== discountMinSum){
     } discountSum == discountPart% productsSum;

    // Задание №2.2. Рассчитать скидку
    let discountSum

    if (productsSum >= discountMinSum) {
	    discountPrice = productsSum * discountPart / 100;
      } else {
	     discountPrice = 0;
	}
	
    // создайте переменную discountSum

    // если productsSum больше или равно discountMinSum,
    // то присвойте discountSum значение discountPart процентов от productsSum,
    // иначе присвойте discountSum значение 0

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);
    let totalSum;

    totalSum = productsSum - discountSum;

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum

    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    // прибавьте к totalSum значение shippingSum
    totalSum = totalSum + shippingSum; 
    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false
    let freeShipping = shippingSum == 0;
    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
