import React from "react";
import styles from "./styles.module.css";
import { stoolsDescriptionArray } from "../../shop/goods/stools"

export const Stools = () => {

    return (
        <div className={styles.root}>
            <div className={styles.squareLeft}>

            {stoolsDescriptionArray.map(stoolsPic => {
                return (
                  <div key={stoolsPic.id}>
                    <img src={stoolsPic.img} alt=""></img>
                  </div>
                )})}
      
            </div>
            <div className={styles.squareCenter}>
            {stoolsDescriptionArray.map(stoolsDescription => {
                return (
                    <div key={stoolsDescriptionArray.id}>
                      <p>{stoolsDescription.name}</p>
                      <p>{stoolsDescription.about}</p>
                    </div>  
                      )})} 
      
            </div>
            <div className={styles.squareRight}>
            {stoolsDescriptionArray.map(stoolsPrice => {
                    return (
                        <div key={stoolsDescriptionArray.id}>
                            <p>{stoolsPrice.price}</p>
                        </div>
                    )})}
            </div>
        </div>

)};