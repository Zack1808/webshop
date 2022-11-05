// Function that will sort the products by ascending or descending price
export const sortProducts = (asc, products, setProducts) => {
    if(asc) {
        const sortedList = [...products];
        sortedList.sort((a, b) => (a.price.raw > b.price.raw) ? 1 : -1);
        setProducts(sortedList)
    }
    else {
        const sortedList = [...products];
        sortedList.sort((a, b) => (a.price.raw < b.price.raw) ? 1 : -1);
        setProducts(sortedList)
    }
}