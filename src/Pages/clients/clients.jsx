import React from "react";
import styles from "./styles.module.css";

import clientsLogo from "../../constants/clientsLogo";

export const Clients = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <h2>Наши клиенты</h2>
            </div>
            <div className={styles.totalClientsBox}>
                {clientsLogo.map(clientsLogoImg => {
                    return (
                        <div className={styles.logo} key={clientsLogoImg}>
                            <img src={clientsLogoImg} alt=""></img>
                         </div>   
                    );
                    })};
            </div>
        </div>
    );
};


