import { commerce } from "../../api/commerceInit";

// importing helper functions
import { sortProducts } from "./helperFunctions";

// Function that will fetch all awailable categories
export const fetchCategories = async ( setCategories) => {
    const { data } = await commerce.categories.list();
    setCategories(data)
}

// Function that will fetch all the products that have the selected category
export const fetchProducts = async (id, setProducts) => {
    let { data } = await commerce.products.list({
        category_id: id,
        limit: 30
    })
    data = sortProducts(true, data)
    setProducts(data)
}

// Function that will fetch only one product according to it's id
export const fetchProduct = async (id, setProduct) => {
    const product = await commerce.products.retrieve(id)
    setProduct(product)
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

// Function that will retreive how many products are in a category
export const fetchCategoryProductCount = async (slug, setAmount) => {
    const { meta } = await commerce.products.list({
        category_slug: slug,
    })
    setAmount(meta.pagination.total)
}

// Function that will retreive the cart 
export const fetchCart = async(setCart) => {
    setCart(await commerce.cart.retrieve())
}