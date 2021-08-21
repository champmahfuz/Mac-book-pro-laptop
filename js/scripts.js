//free price function
function freePrice(isPrice) {
    const withoutCost = document.getElementById(isPrice);
    withoutCost.innerText = 0;
    const value = withoutCost.innerText;
    return value;
}

//chargable  function
function withPrice(isPriceChargable) {
    const withCost = document.getElementById(isPriceChargable);
    withCost.innerText = 180;
    const price = withCost.innerText;
    return price;
}
//memory storage delivary function
function totalMemoryStorageDeliveryPrice(isAmount) {
    const TotalCostText = document.getElementById('total-price');
    const total = updatePrice();
    TotalCostText.innerText = total;
    const CostText = document.getElementById('net-amount');
    const netTotal = updatePrice();
    CostText.innerText = netTotal;
    return netTotal;
}

// memory cost starts

document.getElementById('8gb-memory').addEventListener('click', function () {
    const freeMemory = freePrice('memory-cost');
    totalMemoryStorageDeliveryPrice();

});

document.getElementById('16gb-memory').addEventListener('click', function () {
    const withCost = withPrice('memory-cost');
    totalMemoryStorageDeliveryPrice();

});
// memory cost end

//storage cost starts
document.getElementById('ssd-256').addEventListener('click', function () {
    const freeStorage = freePrice('storage-cost');
    totalMemoryStorageDeliveryPrice();

});

document.getElementById('ssd-512').addEventListener('click', function () {
    const memoryPrice = document.getElementById('storage-cost');
    memoryPrice.innerText = 100;
    totalMemoryStorageDeliveryPrice();

});

document.getElementById('ssd-1tb').addEventListener('click', function () {
    const withCost = withPrice('storage-cost');
    totalMemoryStorageDeliveryPrice();
});
//storage cost ends

//delivery cost starts
document.getElementById('free-delivery').addEventListener('click', function () {
    const freeDelivery = freePrice('delivery-cost');
    totalMemoryStorageDeliveryPrice();

});

document.getElementById('quick-delivery').addEventListener('click', function () {
    const memoryPrice = document.getElementById('delivery-cost');
    memoryPrice.innerText = 20;
    totalMemoryStorageDeliveryPrice();

});
//delivery cost ends

// promo  starts
document.getElementById('input-button').addEventListener('click', function () {
    const input = document.getElementById('button-text');
    const inputPrice = input.value;
    console.log(inputPrice);
    if (inputPrice == 'stevekaku') {
        const number = document.getElementById('net-amount');
        const dicountPrice = updatePrice();
        const pricePromo = parseFloat(dicountPrice);
        const discount = pricePromo * 0.2;
        const netPrice = pricePromo - discount;
        number.innerText = netPrice;
    }
    input.value = '';
});

//promo ends


//total price starts
function updatePrice() {
    const memoryCostTextPrice = document.getElementById('memory-cost');
    const memoryCostAmount = parseInt(memoryCostTextPrice.innerText);
    const storageCostTextPrice = document.getElementById('storage-cost');
    const storageCostAmount = parseInt(storageCostTextPrice.innerText);
    const deliveryCostTextPrice = document.getElementById('delivery-cost');
    const deliveryCostAmount = parseInt(deliveryCostTextPrice.innerText);
    const total = 1299 + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    return total;
}

//total price ends