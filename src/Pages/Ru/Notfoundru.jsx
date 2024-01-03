import React from "react";
import { FooterRu } from "../../Footer/Ru/Footerru";
import { MenuRu } from "../../Menu/MenuRu/MenuRu";
import classes from "../Ru/Startpageru.module.css"
import { Link } from "react-router-dom";

export const NotFoundRu = () => {
    return (
        <>
        <div className={classes.startPageRuWrap}>
          <MenuRu />
          <div className={classes.startPageBodyRu}>
            <div className={classes.mainPic}>
            </div>
              <div className={classes.startPageMiddleRu}>
                <div className={classes.startPageMiddleLeftRu}>
                  <p><h3></h3></p>
                  <p><h3></h3></p>
                  <p><h3>Not Found</h3></p>
                  <p><h3></h3></p>
                  <p></p>
                </div>
                <div className={classes.startPageMiddleSeparateRu}>
                </div>
                <div className={classes.startPageMiddleRightRu}>
                </div>
              </div>
          </div>
            <FooterRu />
        </div>
        </>
    )
}