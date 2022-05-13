import React, { useEffect, useState } from 'react';

import ProductService from "../../services/ProductService";
import {Divider, List, ListItem, ListItemText} from "@mui/material";

export const CataloguePage = () => {
    const [ products, setProducts ] = useState([]);
    const getAllProducts = () => {
        ProductService.getAllProducts()
            .then(response => {
                setProducts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <>
            <h3>Products</h3>
            <List>
                {products && products.map(product => (
                    <>
                        <ListItem>
                            <ListItemText>{product.title}</ListItemText>
                        </ListItem>
                        <Divider/>
                    </>
                ))}
            </List>
        </>
    );
};

export default CataloguePage;