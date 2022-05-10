import React, { useEffect, useState } from 'react';
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText, TextField } from "@mui/material";
import getTestData from "../../services/TestService";
import CategoryService from "../../services/CategoryService";
import CategoryIcon from '@mui/icons-material/Category';
import ProductService from "../../services/ProductService";

export const HomePage = () => {
    // так нужно указывать переменные, которым ты хочешь присвоить значение и потом работать
    const [ data, setData ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ categories, setCategories ] = useState([]);

    const [ newProductTitle, setNewProductTitle ] = useState("");

    const [ newProduct, setNewProduct ] = useState({});

    const getAllCategories = () => {
        CategoryService.getAllCategories()
            .then(resp => {
                // с axios запроса возвращается объект, в котором нужная инфа хранится в .data
                setCategories(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // нужно написать и вывести массив. поля чекать тут https://dummyjson.com/docs/products
    const getAllProducts = () => {
    }

    // юзается в таком виде, чтоб выполнить что-то при начальном рендеринге один раз
    useEffect(() => {
        // тут юзается then если все прошло успешно и вернулось шото хорошее
        // и catch если шото плохое
        getTestData()
            .then(response => setData(response))
            .catch(err => {
                alert(err)
            })

        getAllCategories()
    }, [])

    return (
        <>
            <h1>This is h1 text</h1>
            <p>This is p text</p>
            <button>This is default button</button>
            <Button>This is button from library</Button>
            <Button
                variant="contained"
                onClick={() => {
                    alert("Нажал? И норм?")
                }}
            >This is button from library</Button>
            <TestComponent/>
            <TestComponentWithProps text={"lalala"}/>

            <h3>How to show array data</h3>
            <ul>
                {/*проверяем не undefined ли data, потом мапим каждый элемент в li*/}
                {data && data.map(element => (
                    <li>{element.name} : {element.price}</li>
                ))}
            </ul>

            <h3>Categories</h3>
            <List>
                {categories && categories.map(category => (
                    <>
                        <ListItem>
                            <ListItemIcon>
                                <CategoryIcon/>
                            </ListItemIcon>
                            <ListItemText>{category}</ListItemText>
                        </ListItem>
                        <Divider/>
                    </>
                ))}
            </List>

            <h3>Add new product</h3>
            <TextField
                label="Title"
                onChange={e => {
                    // таким образом при каждом изменении поля оно будет записываться в переменную
                    setNewProductTitle(e.target.value);
                    // а тут будет обновляться объект, в котором обновится заголовок
                    setNewProduct(prevState => ({
                        ...prevState,
                        title: e.target.value
                    }))
                }}
            />
            <Button
                variant="contained"
                onClick={() => {
                    // тут мы берем и засовываем переменную заголовка в объект и отправляем
                    // ProductService.addProduct({title: newProductTitle})
                    //     .then(resp => alert(JSON.stringify(resp.data)))
                    //     .catch(console.log)

                    // а тут мы отправляем сразу готовый объект
                    ProductService.addProduct(newProduct)
                        .then(resp => alert(JSON.stringify(resp.data)))
                        .catch(console.log)
                }}
            >Add new product</Button>

        </>
    );
};

const TestComponent = () => {
    return (
        <>
            <h1>This is another component that can be imported</h1>
        </>
    )
}

const TestComponentWithProps = (props) => {
    return (
        <>
            <h1>This is another component you can pass arguments in, e.g.: {props.text}</h1>
        </>
    )
}

export default HomePage;