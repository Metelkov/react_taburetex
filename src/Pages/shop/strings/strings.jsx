import React from "react";
import styles from "./styles.module.css";
import { stringsDescriptionArray } from "../../shop/goods/strings"

export const Strings = () => {

    return (
        <div className={styles.root}>
            <div className={styles.squareLeft}>
            
            {stringsDescriptionArray.map(stringPic => {
                return (
                  <div key={stringPic.id}>
                    <img src={stringPic.img} alt=""></img>
                  </div>
                )})}
      
            </div>
            
            <div className={styles.squareCenter}>
            {stringsDescriptionArray.map(stringDescription => {
                return (
                    <div key={stringsDescriptionArray.id}>
                      <p>{stringDescription.name}</p>
                      <p>{stringDescription.about}</p>
                    </div>  
                      )})} 
      
            </div>


            <div className={styles.squareRight}>
            {stringsDescriptionArray.map(stringsPrice => {
                    return (
                        <div key={stringsDescriptionArray.id}>
                            <p>{stringsPrice.price}</p>
                        </div>
                    )})}
      
            </div>
        </div>

)};

