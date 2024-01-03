import React from "react";
import styles from "./styles.module.css";
import { Branches } from "./branches/branches"
import { Strings } from "./strings/strings"
import { Stools } from "./stools/stools";
    

export const Shop = () => {
    return (
        <div className={styles.root}>
            <div className={styles.category}>
                <div className={styles.categoryCheckboxBlock}>
                    <p><b>Продукция</b></p>
                  <div className={styles.categoryCheckboxBlockString}>
                    <input type="checkbox" id="branches" value="10" name="branches" checked />
                    <label for="branches">Ветки</label>
                  </div>
                  <div className={styles.categoryCheckboxBlockString}>
                    <input type="checkbox" id="sticks" value="20" name="sticks" checked />
                    <label for="sticks">Палки</label>
                  </div>
                  <div className={styles.categoryCheckboxBlockString}>
                    <input type="checkbox" id="stools" value="30" name="stools" checked />
                    <label for="stools">Табуретки</label>
                </div>
              </div>
            </div>
            <div  className={styles.goods}>
                <Branches />
                <Strings />
                <Stools />

            </div>
        </div>
    );
};