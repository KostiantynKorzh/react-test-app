import axios from "axios";
import { CATEGORY_URL } from "../utils/Constants";

const getAllCategories = async () => {
    return await axios.get(CATEGORY_URL)
}

export default {
    getAllCategories
}