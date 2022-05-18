import React, { useEffect, useState } from 'react';

import ProductService from "../../services/ProductService";
import {Card, CardMedia, Container, Grid, Typography} from "@mui/material";
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
        <Container fixed maxWidth="1440px">
        <Grid container spacing={2} rowSpacing={0} bgcolor="#e9edf8" sx={{
            minHeight: 1000
        }}>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h3" component="div">
                    {productInfo.title}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                {productInfo &&
                    <Card sx={{width: "100%", height: "100%"}}>
                        {productInfo.images &&
                            <CardMedia
                                component="img"
                                width="100%"
                                height="100%"
                                image={productInfo.images[2]}
                                alt={productInfo.title}
                            />
                        }
                    </Card>
                }

            </Grid>
            <Grid item xs={8}>
                <Typography variant="body1" color="text.secondary">
                    {productInfo.description}
                </Typography>

            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" color="#d86e6f">
                    Price: {productInfo.price}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    Rating: {productInfo.rating}
                </Typography>

            </Grid>

        </Grid>
        </Container>
    );
};

export default ProductPage;