import React, {useState} from "react";
import classes from "../Header/Header.module.css"
import { HeadButton } from "../Buttonhead/buttonhead";


export const Header = (props) => {

    const [lik, setLik] = useState(0)

    function kkk() {
        setLik(lik+1)
    }

    return (
        <div className={classes.headerWrap}>
            <div className={classes.headerTitleWrap}>
            <div className={classes.headerTitleName}>
                <h1>Taburetex</h1>
            </div>
            <div className={classes.headerButtonWrap}>
                <a href="/">  <HeadButton>Home</HeadButton></a>
                {/*
                <HeadButton><a href="/ru">Ru</a></HeadButton>
                <HeadButton><a href="/en">En</a></HeadButton>
                */}
                {lik}
                <button onClick={kkk}>En22bb</button>

                <a href="/Shop"> <HeadButton>Shop</HeadButton> </a>
                <a href="/Cart"> <HeadButton>Cart</HeadButton> </a>
            </div>
        </div>
        </div>
    )
}