import React from "react";
import styles from "./styles.module.css";
import branches from "../goods/branches";
import { branchesDescriptionArray } from "../../shop/goods/branches"

export const Branches = () => {

    return (
        <div className={styles.root}>
           
            <div className={styles.squareLeft}>
            {branchesDescriptionArray.map(branchPic => {
                return (
                  <div key={branchPic.id}>
                    <img src={branchPic.img} alt=""></img>
                  </div>
                )})}
            </div>

            <div className={styles.squareCenter}>

            {branchesDescriptionArray.map(branchDescription => {
                return (
                    <div key={branchesDescriptionArray.id}>
                      <p>{branchDescription.name}</p>
                      <p>{branchDescription.about}</p>
                    </div>  
                      )})} 
      
            </div>
            <div className={styles.squareRight}>

                {branchesDescriptionArray.map(branchesPrice => {
                    return (
                        <div key={branchesDescriptionArray.id}>
                            <p>{branchesPrice.price}</p>
                        </div>
                    )})}
      
            </div>
        </div>

)};

