import React, {useEffect, useState} from 'react';

import ProductService from "../../services/ProductService";
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const CataloguePage = () => {
    const [ products, setProducts ] = useState([]);
    const navigate = useNavigate();

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
            <Container>
                <h3>Products</h3>
                <Grid container spacing={2}>
                    {products && products.map(product => (
                        <Grid Card item xs={3} spacing={8}>
                            <Card sx={{width: "100%", height: "100%"}}>
                                <CardMedia
                                    component="img"
                                    width="100%"
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
                                    <Button size="small" onClick={()=>{
                                        navigate("/catalogue/"+product.id)
                                    }}>
                                        Read more
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default CataloguePage;