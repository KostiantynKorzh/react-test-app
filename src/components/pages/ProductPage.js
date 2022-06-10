import React, {useState, useEffect} from 'react';
import ProductService from "../../services/ProductService";
import {useParams} from "react-router-dom";
import {Box, CardMedia, Grid} from "@mui/material";

export const ProductPage = () => {

    const { id } = useParams();
    const [ product, setProduct ] = useState(null);

    const getProduct = () => {
        ProductService.getProductInfo(id)
            .then(resp => {
                setProduct(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProduct()
    }, [])

    if (product)
    return (
        <div>
            <h1>{product.title}</h1>
            <div>{product.description}</div>
            <div>Price is {product.price}$</div>
            <Box
                component="img"
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={product.thumbnail}
            />
            <div>Images:</div>
            <Grid
                container
                pt={0} pl={1} pr={1}
                justifyContent="space-evenly"
                alignItems="baseline"
            >
                {product.images && product.images.map((image, index) => (
                    <Grid Card item
                          p={1}
                          xs={2} sm={3} md={3}
                          key={index}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={image}
                            alt={product.title + " " + index}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
    else return (
        <>
            Error;
        </>
    );
};

export default ProductPage;