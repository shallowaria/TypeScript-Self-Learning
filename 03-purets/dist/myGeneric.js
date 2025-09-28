const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true)
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({});
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo,
    };
}
class Sellable {
    cart = [];
    addToCart(products) {
        this.cart.push(products);
    }
}
export {};
//# sourceMappingURL=myGeneric.js.map