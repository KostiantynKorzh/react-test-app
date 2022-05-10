import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Button } from "@mui/material";

export const Header = () => {

    return (
        <div
            // делает отступ снизу от хедера, шоб основной контенет не скрывался под хедером
            // style={{}} - возможность закастомить каждый элемент отдельно
            // есть также метод с классическим css файлом
            style={{
                marginBottom: "50px"
            }}>
            <AppBar>
                <div
                    // заставляет ссылки стоять горизонтально (display: "flex"; в div по дефолту вертикально) и делает
                    // одинаковое расстояние между элементами и краями (justifyContent: "space-evenly")
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly"
                    }}
                >
                    {/*при нажатии на линку оно перенеаправляет согласно параметру to. Потом его ловит BrowserRouter с App.js*/}
                    <Link to="/">
                        <Button color="secondary">Home</Button>
                    </Link>
                    <Link to="/catalogue">
                        <Button color="secondary">Catalogue</Button>
                    </Link>
                </div>
            </AppBar>
        </div>
    );
};

export default Header;