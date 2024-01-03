import React from "react";
import { FooterEn } from "../../Footer/En/Footeren";
import { MenuEn } from "../../Menu/MenuEn/MenuEn";
import classes from "../En/Startpageen.module.css"
import { Link } from "react-router-dom";

export const ContactPageEn = () => {
    return (
        <>
        <div className={classes.startPageRuWrap}>
          <MenuEn />
          <div className={classes.startPageBodyRu}>
            <div className={classes.mainPic}>
            </div>
              <div className={classes.startPageMiddleRu}>
                <div className={classes.startPageMiddleLeftRu}>
                  <p><h3>Contacts "JSC "Scientific Industrial Enterprise "SOTEX"</h3></p>
                  <p><h3>603095, г. Nizhny Novgorod, Shuvalovsky passage, 5 
                    Tel.: +7 (831) 297 30 29 
                    </h3></p>
                  <p><h3>E-mail: info@sotex-nn.ru</h3></p>
                  <p><h3></h3></p>
                  <p></p>
                </div>
                <div className={classes.startPageMiddleSeparateRu}>
                </div>
                <div className={classes.startPageMiddleRightRu}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1107.7254704127174!2d43.84926528259384!3d56.27026285142322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1677840320748!5m2!1sru!2sru" 
                    width="600" 
                    height="450" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
          </div>
            <FooterEn />
        </div>
        </>
    )
}