import axios from "axios";
import { PRODUCT_URL } from "../utils/Constants";

const getAllProducts = async () => {
    return await axios.get(PRODUCT_URL)
}

const getProductInfo = async (id) => {
    return await axios.get(PRODUCT_URL+id)
}


const addProduct = async (newProduct) => {
    return await axios.post(PRODUCT_URL + "add", newProduct);
}

export default {
    getAllProducts,
    addProduct,
    getProductInfo
}