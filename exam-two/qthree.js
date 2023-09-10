// function productListFunction(arrOne, arrTwo){
//     const inStockProductList = [];
//     const outOfStockProductList = []
//     for(const product of arrOne){
//         for(arrs of arrTwo){
//             const newObjKey = {}
//             if(product.id === arrs){
//                 const newObjKey = {id: arrs, title: product.title};
//                 inStockProductList.push(newObjKey);
//             } else{
                
//             }
//         }
//     }

//     console.log(inStockProductList);
//     console.log(outOfStockProductList);
// }

// const productList = [
//     {id: 101, title: "Product 1"},
//     {id: 102, title: "Product 2"},
//     {id: 103, title: "Product 3"},
//     {id: 104, title: "Product 4"}
// ];

// const availableProductInInventory = [102, 104];

// productListFunction(productList, availableProductInInventory);
function checkProductAvailability(productList, availableProductInInventory) {
    const inStock = [];
    const outOfStock = [];

    for (const product of productList) {
        if (availableProductInInventory.includes(product.id)) {
            inStock.push(product);
        } else {
            outOfStock.push(product);
        }
    }

    return {
        inStock,
        outOfStock
    };
}

const productList = [
    { id: 101, title: "Product 1" },
    { id: 102, title: "Product 2" },
    { id: 103, title: "Product 3" },
    { id: 104, title: "Product 4" }
];

const availableProductInInventory = [102, 104];

const result = checkProductAvailability(productList, availableProductInInventory);
console.log("In Stock:", result.inStock);
console.log("Out of Stock:", result.outOfStock);
