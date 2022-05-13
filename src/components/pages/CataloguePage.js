import React, { useEffect, useState } from 'react';

import ProductService from "../../services/ProductService";
import {
    Box,
    Button,
    Card,
    CardActions, CardContent,
    CardMedia,
    Grid,
    Typography
} from "@mui/material";

export const CataloguePage = () => {
    const [ products, setProducts ] = useState([]);
    const getAllProducts = () => {
        ProductService.getAllProducts()
            .then(response => {
                setProducts(response.data.products)
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
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {products && products.map(product => (
                    <Grid Card xs={3}>
                    <Card sx={{ width: 345, height: 400}}>
                        <CardMedia
                            component="img"
                            height="260"
                            image={product.thumbnail}
                            alt={product.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Add to cart</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                ))}
            </Grid>
            </Box>
        </>
    );
};

export default CataloguePage;