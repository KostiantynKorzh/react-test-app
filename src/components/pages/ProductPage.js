import React, { useEffect, useState } from 'react';

import ProductService from "../../services/ProductService";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import {useParams} from "react-router-dom";

export const ProductPage = () => {
    const { id } = useParams();
    const [ productInfo, setProduct ] = useState([]);
    const getProductInfo = () => {
        ProductService.getProductInfo(id)
            .then(response => {
                setProduct(response.data)
                console.log(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProductInfo()

    }, [])

    return (
        <Grid container spacing={0}>
            <Grid item xs={8}>

            <Card sx={{width: "100%", height: "100%"}}>
                <CardMedia
                    component="img"
                    width="100%"
                    height="100%"
                    image={productInfo.thumbnail}
                    alt={productInfo.title}
                />

            </Card>

            </Grid>
            <Grid item xs={4}>
                <Typography>Aboba</Typography>
            </Grid>
        </Grid>
    );
};

export default ProductPage;