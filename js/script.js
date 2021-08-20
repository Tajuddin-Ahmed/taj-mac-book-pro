function updateTotalPrice(){
    // best price 
    const bestPrice = 1299;
    // extra memory cost
    const exMemCost = document.getElementById('ex-Mem-Cost');
    const exMemCostValue =  parseInt(exMemCost.innerText);
    // extra storage cost 
    const exStorCost = document.getElementById('ex-Store-Cost');
    const exStorCostValue = parseInt(exStorCost.innerText);
    // delivery cost 
    const freeDelivery = document.getElementById('delivery-Cost');
    const freeDeliveryValue = parseInt(freeDelivery.innerText)
    // make total 
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice+exMemCostValue+exStorCostValue+freeDeliveryValue;
    // total price2 
    const totalPrice2 = document.getElementById('total-price2');
    totalPrice2.innerText = totalPrice.innerText;
}
function selectedBtn(costId,value){
    const cost = document.getElementById(costId);
    cost.innerText = value;
}

function selectAndUpadate(priceId,value){
    selectedBtn(priceId+'-Cost', value);
    updateTotalPrice();
}

function getPromocode(){
    const promoCode = document.getElementById('promo-code');
    const promoCodeValue = promoCode.value;
    if(promoCodeValue === 'stevekaku'){
        const totalPrice = document.getElementById('total-price');
        const totalPriceValue = parseFloat(totalPrice.innerText);
        const paymentAmount = totalPriceValue - (0.2*totalPriceValue);
        document.getElementById('total-price2').innerText = paymentAmount;
    }
    promoCode.value = '';
}

// Memory Part 
document.getElementById('membtn1').addEventListener('click',function(){
     selectAndUpadate('ex-Mem',0);     
});
document.getElementById('membtn2').addEventListener('click',function(){
     selectAndUpadate('ex-Mem',180);
});

// Storage Part 
document.getElementById('storageBtn1').addEventListener('click',function(){
     selectAndUpadate('ex-Store',0);
});
document.getElementById('storageBtn2').addEventListener('click',function(){
     selectAndUpadate('ex-Store',100);
});
document.getElementById('storageBtn3').addEventListener('click',function(){
     selectAndUpadate('ex-Store',180);
});

// Delivery Part 
document.getElementById('deliveryBtn1').addEventListener('click',function(){
     selectAndUpadate('delivery',0);  
});
document.getElementById('deliveryBtn2').addEventListener('click',function(){
     selectAndUpadate('delivery',20);
});

// promo code section 
document.getElementById('applyBtn').addEventListener('click',function(){
     getPromocode();
});
