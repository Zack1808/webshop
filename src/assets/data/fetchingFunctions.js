import { commerce } from "../../api/commerceInit";

// Function that will fetch all awailable categories
export const fetchCategories = async ( setCategories) => {
    const { data } = await commerce.categories.list();
    setCategories(data)
}

// Function that will fetch all the products that have the selected category
export const fetchProducts = async (id, setProducts) => {
    const { data } = await commerce.products.list({
        category_id: id,
    })
    setProducts(data)
}

// Function that will fetch the subcategories
export const fetchSubCategories = (id, categories) => {
    if(id) {
        let index;
        for(var i = 0; i < categories.length; i++) {
            if(categories[i].id === id) index = i;
        }
        return categories[index].children;
    }
    return [];
}