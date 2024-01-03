import React from "react";
import { FooterRu } from "../../Footer/Ru/Footerru";
import { MenuRu } from "../../Menu/MenuRu/MenuRu";
import classes from "../Ru/Startpageru.module.css"
import { Link } from "react-router-dom";

export const StartPageRu = () => {
    return (
        <>
        <div className={classes.startPageRuWrap}>
          <div className={classes.startPageBodyRu}>
            <div className={classes.mainPic}>
            </div>
              <div className={classes.startPageMiddleRu}>
                <div className={classes.startPageMiddleLeftRu}>
                  <p><h3><a href ="https://www.sotex.ru/"> Сотекс здорового человека</a></h3></p>
                  <p><h3><a href = "http://sotex-nn.ru/ru/">Сотекс курильщика</a></h3></p>
                  <p>Т.к. всё это демонстрация, то заполнять все пункты меню нет смысла</p>
                </div>
                <div className={classes.startPageMiddleSeparateRu}>
                </div>
                <div className={classes.startPageMiddleRightRu}>
                  <p>
                    Сама компания очень успешная..Сама компания очень успешная. </p>
                </div>
              </div>
          </div>
        </div>
        </>
    )
}