// Function that will display the selected category
export const renderCategory = (id, categories) => {
    if(id) {
        let index;
        for(var i = 0; i < categories.length; i++) {
            if(categories[i].id === id) index = i;
        }
        return categories[index].name;
    }
    return "...Select Category";
};

// Function that will return the products depending on the selected sub category
export const renderProducts = (products, subCategory) => {
    let selected = [];
    products.map(product => {
        product.categories.map(category => {
            for(let i = 0; i < subCategory.length; i++) {
                if(subCategory[i] === category.slug) selected.push(product)
            }
        })
    });
    return selected
}