import React, {useState, useEffect} from 'react';
import ProductService from "../../services/ProductService";
import {CardMedia, Grid, Link} from "@mui/material";

export const CataloguePage = () => {

    const [ products, setProducts ] = useState([]);

    const getAllProducts = () => {
        ProductService.getAllProducts()
            .then(resp => {
                setProducts(resp.data.products)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div>
            <Grid
                container
                pt={0} pl={1} pr={1}
                justifyContent="space-evenly"
                alignItems="baseline"
            >
                {products && products.map((element, index) => (
                    <Grid Card item
                        p={1}
                        xs={2} sm={3} md={3}
                        key={index}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={element.thumbnail}
                            alt={element.title}
                        />
                        <h3 align={"right"}>
                            <Link
                                underline={"none"}
                                href={"catalogue/" + element.id}>
                                {element.title}
                            </Link>
                        </h3>

                        <div align={"justify"}>{element.description}</div>
                        <div>Price: {element.price}</div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CataloguePage;